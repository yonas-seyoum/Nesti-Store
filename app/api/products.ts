import api from ".";
import { Product } from "@/utils/types";

export const ProductsAPI = {
  getProducts: async () => {
    return api.get("/products");
  },
  getProductById: async (id: number) => {
    return api.get(`/products/${id}`);
  },
  addProduct: async (product: Product) => {
    return api.post("/products", product);
  },
  updateProduct: async (id: number, product: Product) => {
    return api.put(`/products/${id}`, product);
  },
  deleteProduct: async (id: number) => {
    return api.delete(`/products/${id}`);
  },
};
