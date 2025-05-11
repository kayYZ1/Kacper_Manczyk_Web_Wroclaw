import Products from "@/lib/data/products.json";

export type Product = (typeof Products)[number];

export type CartItem = Product & {
  quantity: number;
};

export const CartActions = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  UPDATE_QUANTITY: "UPDATE_QUANTITY",
  CLEAR_CART: "CLEAR_CART",
} as const;
