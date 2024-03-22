"use client";

import { useState } from "react";
import PlaceList from "@/containers/place/place-list";
import { ImageSizeContext } from "@/containers/place/context";

export default function PlacePage() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
    <ImageSizeContext.Provider value={imageSize}>
      <main className="font-inter min-h-screen w-full">
        <div className="px-3 py-4 text-xl flex items-center justify-end gap-2 ">
          <input
            id="check-larger"
            type="checkbox"
            className="w-4 h-4"
            checked={isLarge}
            onChange={(e) => {
              setIsLarge(e.target.checked);
            }}
          />
          <label htmlFor="check-larger" className="hover:text-blue-600 ">
            Use large images
          </label>
        </div>
        <PlaceList />
      </main>
    </ImageSizeContext.Provider>
  );
}
