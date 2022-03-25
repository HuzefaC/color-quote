import { useState, useEffect } from 'react';
import { TextField } from '@shopify/polaris';

export default function TextFieldComponent({ setQuoteInput }) {
  const [quote, setQuote] = useState('Your quote');

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuoteInput(quote);
    }, 500);
    return () => clearTimeout(timer);
  }, [setQuoteInput, quote]);

  return (
    <TextField
      label='Your Quote'
      value={quote}
      onChange={(e) => setQuote(e)}
      maxLength={100}
      autoComplete='off'
      showCharacterCount
    />
  );
}
