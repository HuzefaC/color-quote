import React, { useState } from 'react';

export default function QuoteImageComponent() {
  const [imageSource] = useState('');

  return (
    <>
      <canvas id='canvas'></canvas>
      <img id='image-target' src={imageSource} alt='Quote' />
    </>
  );

  // return <img id='image-target' src={imageSource} alt='Quote' />;
}
