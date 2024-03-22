import { PlaceI } from "./data";
import Image from "next/image";
import { useContext } from "react";
import { ImageSizeContext } from "./context";

export default function Place({ place }: { place: PlaceI }) {
  const imageSize = useContext(ImageSizeContext);

  return (
    <>
      <Image
        className="rounded-sm w-auto h-auto"
        src={getImageUrl(place.imageId)}
        alt={place.name}
        width={imageSize}
        height={imageSize}
      />
      <div>
        <p className="text-xl font-semibold">{place.name}</p>
        <p className="text-lg">{place.description}</p>
      </div>
    </>
  );
}

function getImageUrl(imageId: string) {
  return "https://i.imgur.com/" + imageId + "l.jpg";
}
