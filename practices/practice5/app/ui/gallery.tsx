import ArtPiece from "./art-piece";
import { ARTPIECES } from "../data";
import styles from "./gallery.module.css";

export default function Gallery() {
  return (
    <div>
      <h1 className={styles.title}>바위가 되는 법</h1>
      <div className={styles.gridContainer}>
        {ARTPIECES.map((art) => (
          <ArtPiece
            key={art.imageId}
            imageId={art.imageId}
            name={art.name}
            createdYear={art.createdYear}
            ingredients={art.ingredients}
          />
        ))}
      </div>
    </div>
  );
}
