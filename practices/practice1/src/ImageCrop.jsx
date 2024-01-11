import React, { useState, useRef } from "react";

import ReactCrop, { centerCrop, makeAspectCrop } from "react-image-crop";
import { canvasPreview } from "./canvasPreview";
import { useDebounceEffect } from "./useDebounceEffect";

import "react-image-crop/dist/ReactCrop.css";

// 아래 정보들을 기반으로 크롭 정보(자르는 범위)를 생성하고 반환합니다.
function centerAspectCrop(mediaWidth, mediaHeight, aspect) {
  //자르기 도구
  return centerCrop(
    // 초기 드래그 범위
    makeAspectCrop(
      {
        unit: "%",
        width: 50,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
}

export default function ImageCrop() {
  const [imgSrc, setImgSrc] = useState("");
  const previewCanvasRef = useRef(null);
  const imgRef = useRef(null);

  const [crop, setCrop] = useState();
  const [completedCrop, setCompletedCrop] = useState();
  const aspect = 1 / 1;

  function onSelectFile(e) {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined); // Makes crop preview update between images.
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        setImgSrc(reader.result?.toString() || "")
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  // 이미지 로드가 완료되면 호출됩니다.
  function onImageLoad(e) {
    const { width, height } = e.currentTarget;
    setCrop(centerAspectCrop(width, height, aspect));
  }

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        // We use canvasPreview as it's much faster than imgPreview.
        canvasPreview(imgRef.current, previewCanvasRef.current, completedCrop);
      }
    },
    100,
    [completedCrop]
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        marginBottom: "70px",
      }}
    >
      <div className="Crop-Controls">
        <input type="file" accept="image/*" onChange={onSelectFile} />
      </div>
      {!!imgSrc && (
        <ReactCrop
          crop={crop}
          onChange={(_, percentCrop) => setCrop(percentCrop)}
          onComplete={(c) => setCompletedCrop(c)}
          aspect={aspect}
          // minWidth={400}
          minHeight={100}
          circularCrop
        >
          <img ref={imgRef} alt="Crop me" src={imgSrc} onLoad={onImageLoad} />
        </ReactCrop>
      )}
      {!!completedCrop && (
        <>
          <div>
            <canvas
              ref={previewCanvasRef}
              style={{
                border: "1px solid black",
                objectFit: "contain",
                width: completedCrop.width,
                height: completedCrop.height,
                borderRadius: "50%",
              }}
            />
          </div>
        </>
      )}
    </div>
  );
}
