import { useState, useCallback } from "react";
import Cropper from "react-easy-crop";

const EasyCrop = () => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
  }, []);

  return (
    <>
      <Cropper
        image={
          "https://cdn.pixabay.com/photo/2023/10/30/19/10/clouds-8353592_1280.jpg"
        }
        crop={crop}
        zoom={zoom}
        aspect={4 / 3}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
      />
    </>
  );
};

export default EasyCrop;
