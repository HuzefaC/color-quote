import { useState, useEffect } from 'react';
import { ColorPicker } from '@shopify/polaris';

export default function ColorPickerComponent({ setColorInput }) {
  const [color, setColor] = useState({
    hue: 300,
    brightness: 1,
    saturation: 0.7,
    alpha: 0.7,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setColorInput(color);
    }, 500);
    return () => clearTimeout(timer);
  }, [setColorInput, color]);

  return <ColorPicker onChange={setColor} color={color} allowAlpha />;
}
