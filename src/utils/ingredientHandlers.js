import * as Sentry from '@sentry/browser';

export function manualSubmitHandler(input, onSubmit, setInput, setIsSubmitting) {
  if (!input.trim()) return;
  const ingredients = input.split(',').map(item => item.trim()).filter(Boolean);
  setIsSubmitting(true);
  console.log('Manual input ingredients:', ingredients);
  try {
    onSubmit(ingredients);
  } catch (error) {
    console.error('Error submitting ingredients:', error);
    Sentry.captureException(error);
  } finally {
    setIsSubmitting(false);
    setInput('');
  }
}

export function barcodeScanHandler(onSubmit) {
  console.log('Barcode scanning initiated');
  const scannedIngredients = ['milk', 'eggs'];
  try {
    onSubmit(scannedIngredients);
    console.log('Scanned ingredients:', scannedIngredients);
  } catch (error) {
    console.error('Error with barcode scanning:', error);
    Sentry.captureException(error);
  }
}

export function voiceInputHandler(onSubmit) {
  console.log('Voice input initiated');
  const voiceInput = prompt('Please say your ingredients (comma-separated):');
  if (voiceInput) {
    const ingredients = voiceInput.split(',').map(item => item.trim()).filter(Boolean);
    try {
      onSubmit(ingredients);
      console.log('Voice input ingredients:', ingredients);
    } catch (error) {
      console.error('Error with voice input:', error);
      Sentry.captureException(error);
    }
  }
}