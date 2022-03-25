import { useState, useEffect } from 'react';
import { renderImage } from '../helpers';

const initialQuote = 'Your quote';
const initialColor = {
  hue: 300,
  brightness: 1,
  saturation: 0.7,
  alpha: 0.7,
};

export function useDataFetch() {
  const [quoteInput, setQuoteInput] = useState(initialQuote);
  const [colorInput, setColorInput] = useState(initialColor);

  useEffect(() => {
    renderImage(quoteInput, colorInput);
  }, [quoteInput, colorInput]);

  return {
    setQuoteInput,
    setColorInput,
  };
}
