import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "./cropImage";

const ImageCropDialog = ({
  imageUrl,
  cropInit = { x: 0, y: 0 },
  zoomInit = 1,
  onCancel,
  setCroppedImageFor,
  onReset,
}) => {
  const [zoom, setZoom] = useState(zoomInit);
  const [crop, setCrop] = useState(cropInit);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((_croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const onCrop = async () => {
    const croppedImageUrl = await getCroppedImg(imageUrl, croppedAreaPixels);
    setCroppedImageFor(crop, zoom, croppedImageUrl);
  };

  return (
    <div>
      <div className="backdrop"></div>
      <div className="crop-container">
        <Cropper
          image={imageUrl}
          zoom={zoom}
          crop={crop}
          showGrid={false}
          aspect={1 / 1}
          cropShape="round"
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
        />
      </div>
      <div className="controls">
        <div className="controls-upper-area">
          <input
            type="range"
            min={1}
            max={3}
            step={0.1}
            value={zoom}
            onInput={(e) => {
              setZoom(e.target.value);
            }}
            className="slider"
            aria-labelledby="zoom"
          ></input>
        </div>
        <div className="button-area">
          <button onClick={onCancel}>Cancel</button>
          <button onClick={onReset}>Reset</button>
          <button onClick={onCrop}>Crop</button>
        </div>
      </div>
    </div>
  );
};

export default ImageCropDialog;
