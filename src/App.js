import "./App.css";
import { useState } from "react";
import ImageCropDialog from "./ImageCropDialog";

const initData = [
  {
    id: 1,
    imageUrl: "images/easyCrop/flower1.jpg",
    croppedImageUrl: null,
  },
  {
    id: 2,
    imageUrl: "images/easyCrop/flower2.jpg",
    croppedImageUrl: null,
  },
  {
    id: 3,
    imageUrl: "images/easyCrop/flower3.jpg",
    croppedImageUrl: null,
  },
  {
    id: 4,
    imageUrl: "images/easyCrop/flower4.jpg",
    croppedImageUrl: null,
  },
];

function App() {
  const [flowers, setFlowers] = useState(initData);
  const [selectedFlower, setSelectedFlower] = useState(null);

  const onCancel = () => {
    setSelectedFlower(null);
  };

  const setCroppedImageFor = (id, crop, zoom, aspect, croppedImageUrl) => {
    const newflowersList = [...flowers];
    const flowerIndex = flowers.findIndex((x) => x.id === id);
    const flower = flowers[flowerIndex];
    const newFlower = { ...flower, croppedImageUrl, crop, zoom, aspect };
    newflowersList[flowerIndex] = newFlower;
    setFlowers(newflowersList);
    setSelectedFlower(null);
  };

  const resetImage = (id) => {
    setCroppedImageFor(id);
  };

  return (
    <div>
      {selectedFlower ? (
        <ImageCropDialog
          id={selectedFlower.id}
          imageUrl={selectedFlower.imageUrl}
          cropInit={selectedFlower.crop}
          zoomInit={selectedFlower.zoom}
          aspectInit={selectedFlower.aspect}
          onCancel={onCancel}
          setCroppedImageFor={setCroppedImageFor}
          resetImage={resetImage}
        />
      ) : null}
      {flowers.map((flower) => (
        <div className="imageCard" key={flower.id}>
          <img
            src={
              flower.croppedImageUrl ? flower.croppedImageUrl : flower.imageUrl
            }
            alt=""
            onClick={() => {
              console.log(flower);
              setSelectedFlower(flower);
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
