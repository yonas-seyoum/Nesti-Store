export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  imageURL: string;
  colors: string[];
  brand: string;
//   detial: BagDetail;
};

export type BagDetail = {
    id: number;
}

export type Order = {
    id: number;
    productId: number;
}