export interface Product {
  category: "Fruits" | "Vegetables";
  price: string;
  stocked: boolean;
  name: string;
}

export interface ArtPiece {
  imageId: string;
  name: string;
  createdYear: number;
  ingredients: string[];
  descrtiption?: string;
  imageSize?: 350;
}
