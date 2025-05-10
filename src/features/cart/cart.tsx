import { Fragment } from "react";
import { useNavigate } from "react-router";

import { useCart } from "@/lib/cart-context";
import { CartActions } from "@/utils/types";
import type { CartItem } from "@/utils/types";

import styles from "./cart.module.css";

export default function Cart() {
  const navigate = useNavigate();
  const { cart, dispatch } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.quantity * (item.price.main + item.price.fractional / 100),
    0
  );

  const incrementItem = (id: number) => {
    const item = cart.find(item => item.id === id);
    if (item) {
      dispatch({ 
        type: CartActions.UPDATE_QUANTITY, 
        payload: { id, quantity: item.quantity + 1 } 
      });
    }
  };

  const decrementItem = (id: number) => {
    const item = cart.find(item => item.id === id);
    if (item && item.quantity > 1) {
      dispatch({ 
        type: CartActions.UPDATE_QUANTITY, 
        payload: { id, quantity: item.quantity - 1 } 
      });
    }
  };

  const removeItem = (id: number) => {
    dispatch({ type: CartActions.REMOVE_FROM_CART, payload: { id } });
  };

  const clearCart = () => {
    dispatch({ type: CartActions.CLEAR_CART });
  };

  const countTotalItemPrice = (item: CartItem) => {
    return item.price.main * item.quantity + item.price.fractional * item.quantity / 100;
  };

  return (
    <Fragment>
      <div className="header">
        <h1>Koszyk</h1>
        <a onClick={() => navigate("/")}>Powrót do listy produktów</a>
      </div>
      <div className={styles.cartList}>
        {cart.map(item => (
          <div className={styles.cartItem} key={item.id}>
            <div>
              <h2 className={styles.cartName}>{item.name}</h2>
              <p className={styles.cartPrice}>
                {item.price.main}.{item.price.fractional} zł × {item.quantity}
              </p>
              <p className={styles.cartPriceTotal}>{countTotalItemPrice(item).toFixed(2)} zł</p>
            </div>
            <div className={styles.cartActions}>
              <button className="btn btn-primary" onClick={() => removeItem(item.id)}>Usuń</button>
              <button
                className="btn btn-secondary"
                onClick={() => incrementItem(item.id)}
              >
                +
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => decrementItem(item.id)}
                disabled={item.quantity === 1}
              >
                -
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.cartSummary}>
        <p>Suma: {total.toFixed(2)} zł</p>
        <span className={styles.cartSummaryActions}>
          <button className="btn btn-secondary" onClick={clearCart}>Wyczyść koszyk</button>
          <button className="btn btn-primary">Podsumowanie</button>
        </span>
      </div>
    </Fragment>
  );
}
