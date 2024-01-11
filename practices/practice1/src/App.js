import "./App.css";
import { useState } from "react";
import ImageCropDialog from "./ImageCropDialog";

function App() {
  const initData = {
    imageUrl: "images/easyCrop/flower5.jpg",
    croppedImageUrl: null,
  };

  const [flowers, setFlowers] = useState(initData);
  const [selectedFlower, setSelectedFlower] = useState(null);

  const onCancel = () => {
    setSelectedFlower(null);
  };

  const setCroppedImageFor = (crop, zoom, croppedImageUrl) => {
    const newFlower = { ...flowers, croppedImageUrl, crop, zoom };

    setFlowers(newFlower);
    setSelectedFlower(null);
  };

  const onReset = () => {
    setFlowers(initData);
    setSelectedFlower(null);
  };

  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        setSelectedFlower({
          ...flowers,
          imageUrl: reader.result?.toString() || "",
        })
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div>
      <div
        style={{
          textAlign: "center",
          marginTop: "10rem",
        }}
      >
        <label htmlFor="flowerImg">
          <img
            src={
              flowers.croppedImageUrl
                ? flowers.croppedImageUrl
                : flowers.imageUrl
            }
            alt=""
            style={{
              objectFit: "cover",
              borderRadius: "50%",
              height: "200px",
              width: "200px",
            }}
          />
        </label>

        <input
          type="file"
          id="flowerImg"
          accept="image/*"
          onChange={onSelectFile}
          style={{ display: "none" }}
        />
      </div>
      {selectedFlower ? (
        <ImageCropDialog
          imageUrl={selectedFlower.imageUrl}
          cropInit={selectedFlower.crop}
          zoomInit={selectedFlower.zoom}
          onCancel={onCancel}
          setCroppedImageFor={setCroppedImageFor}
          onReset={onReset}
        />
      ) : null}
    </div>
  );
}

export default App;
