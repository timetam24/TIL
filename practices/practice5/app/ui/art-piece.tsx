import Image from "next/image";
import { ArtPiece } from "../type";

function getImageUrl(imageId: string) {
  return process.env.IMAGE_URL + imageId + ".jpg";
}

export default function ArtPiece({
  imageId,
  name,
  createdYear,
  ingredients,
  imageSize = 350,
}: ArtPiece) {
  return (
    <section>
      <figure
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <Image
          src={getImageUrl(imageId)}
          alt={name}
          width={imageSize}
          height={imageSize}
          style={{ objectFit: "cover" }}
        />
        <figcaption>
          {name}, {createdYear}, {ingredients.join(", ")}
        </figcaption>
      </figure>
    </section>
  );
}
