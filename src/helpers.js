import canvasTxt from 'canvas-txt';

const imageSettings = {
  width: 1000,
  height: 500,
  background: 'black',
  type: 'image/png',
};

const textSettings = {
  font: 'Lato',
  align: 'center',
  vAlign: 'middle',
  lineHeight: null,
  justify: false,
};

export function renderImage(text, color) {
  text = text.trim();
  const { width, height, background, type } = { ...imageSettings };
  const target = document.getElementById('image-target');
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = width;
  canvas.height = height;
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, width, height);
  draw(ctx, width, height, text, color);
  const dataURI = canvas.toDataURL(type);
  target.src = dataURI;
}

function draw(ctx, maxWidth, maxHeight, text, color) {
  const { font, align, vAlign, lineHeight, justify } = {
    ...textSettings,
  };
  ctx.fillStyle = colorString(color);
  canvasTxt.font = font;
  canvasTxt.fontSize = calculateFontSize(text);
  canvasTxt.align = align;
  canvasTxt.vAlign = vAlign;
  canvasTxt.lineHeight = lineHeight;
  canvasTxt.justify = justify;
  canvasTxt.drawText(ctx, text, 0, 0, maxWidth, maxHeight);
}

function colorString({ hue, brightness, saturation, alpha }) {
  return `hsla(${hue}, ${brightness * 100}%, ${saturation * 100}%, ${alpha})`;
}

function calculateFontSize(text) {
  if (text.length <= 10) {
    return 200;
  } else if (text.length > 10 && text.length <= 30) {
    return 150;
  } else if (text.length > 30 && text.length <= 60) {
    return 100;
  } else {
    return 75;
  }
}
