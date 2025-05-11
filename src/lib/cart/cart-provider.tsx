import { createContext, useReducer } from "react";
import type { Dispatch, ReactNode } from "react";

import type { CartItem, Product } from "@/lib/types";
import { CartActions } from "@/lib/types";

type Action =
  | { type: typeof CartActions.ADD_TO_CART; payload: Product }
  | { type: typeof CartActions.REMOVE_FROM_CART; payload: { id: number } }
  | {
      type: typeof CartActions.UPDATE_QUANTITY;
      payload: { id: number; quantity: number };
    }
  | { type: typeof CartActions.CLEAR_CART };

type CartContext = {
  cart: CartItem[];
  dispatch: Dispatch<Action>;
};

const CartContext = createContext<CartContext | null>(null);

function cartReducer(state: CartItem[], action: Action): CartItem[] {
  switch (action.type) {
    case CartActions.ADD_TO_CART: {
      const existing = state.find((item) => item.id === action.payload.id);
      if (existing) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }

    case CartActions.REMOVE_FROM_CART: {
      return state.filter((item) => item.id !== action.payload.id);
    }

    case CartActions.UPDATE_QUANTITY: {
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item,
      );
    }

    case CartActions.CLEAR_CART:
      return [];

    default:
      return state;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext };
