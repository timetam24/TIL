export async function canvasPreview(image, canvas, crop) {
  //Canvas에 2D 렌더링 컨텍스트를 가져옵니다. 이것은 Canvas에 그림을 그리는 데 사용되는 메소드와 속성을 제공합니다.
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("No 2d context");
  }

  // 원본 이미지 크기(naturalWidth, naturalHeight)와 실제 이미지 크기(width, height) 사이의 비율을 계산합니다. 이 비율은 잘라내려는 영역이 원본 이미지에서 어디인지 정확하게 계산하는 데 사용됩니다.
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;

  // 디바이스의 픽셀 비율을 가져옵니다. 이는 레티나 디스플레이와 같이 고해상도 디바이스에서 이미지의 선명도를 높이는 데 사용됩니다.
  // const pixelRatio = 1
  const pixelRatio = window.devicePixelRatio;

  // 잘라낼 영역의 크기를 계산하여 캔버스의 크기를 설정합니다.
  canvas.width = Math.floor(crop.width * scaleX * pixelRatio);
  canvas.height = Math.floor(crop.height * scaleY * pixelRatio);

  // 캔버스의 크기를 디바이스 픽셀 비율에 맞게 조정합니다.
  ctx.scale(pixelRatio, pixelRatio);

  ctx.imageSmoothingQuality = "high";

  const cropX = crop.x * scaleX;
  const cropY = crop.y * scaleY;

  const centerX = image.naturalWidth / 2;
  const centerY = image.naturalHeight / 2;

  ctx.save();

  // 캔버스의 원점을 이미지의 중앙으로 이동하고, 잘라내려는 영역의 원점을 캔버스의 원점으로 이동합니다.
  ctx.translate(-cropX, -cropY);
  ctx.translate(centerX, centerY);
  ctx.translate(-centerX, -centerY);

  // 잘라낼 영역을 캔버스에 그립니다.
  ctx.drawImage(
    image,
    0,
    0,
    image.naturalWidth,
    image.naturalHeight,
    0,
    0,
    image.naturalWidth,
    image.naturalHeight
  );

  // 캔버스의 상태를 이전 상태로 복원합니다. 이는 ctx.save에서 저장된 상태를 복원하는 것입니다. 이렇게 함으로써, 이 함수가 끝나더라도 다른 함수에서 캔버스를 계속 사용할 수 있습니다.
  ctx.restore();
}
