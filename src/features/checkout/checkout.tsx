import { Fragment } from "react";
import { useNavigate } from "react-router";

import { useCart } from "@/lib/cart/use-cart";
import { CartActions } from "@/lib/types";
import type { CartItem } from "@/lib/types";

import styles from "./checkout.module.css";

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, dispatch } = useCart();

  const total = cart.reduce(
    (sum, item) =>
      sum + item.quantity * (item.price.main + item.price.fractional / 100),
    0,
  );

  const countTotalItemPrice = (item: CartItem) => {
    return (
      item.price.main * item.quantity +
      (item.price.fractional * item.quantity) / 100
    );
  };

  const handleOrder = () => {
    sessionStorage.setItem("order", JSON.stringify(cart));
    dispatch({ type: CartActions.CLEAR_CART });
    //Put items in the sessionStorage, clear the cart and make a full page reload.
    window.location.href = "/order-confirmation.html";
  };

  return (
    <Fragment>
      <div className="header">
        <h1>Podsumowanie zamówienia</h1>
        <a onClick={() => navigate("/cart")}>Powrót do koszyka</a>
      </div>
      <div className={styles.checkoutList}>
        {cart.map((item) => (
          <div className={styles.checkoutItem} key={item.id}>
            <div>
              <h2 className={styles.checkoutName}>{item.name}</h2>
              <p className={styles.checkoutPrice}>
                {item.price.main}.{item.price.fractional} zł × {item.quantity}
              </p>
              <p className={styles.checkoutPriceTotal}>
                {countTotalItemPrice(item).toFixed(2)} zł
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.checkoutTotal}>
        <p>Suma: {total.toFixed(2)} zł</p>
        <button className="btn btn-primary" onClick={handleOrder}>
          Złóż zamówienie
        </button>
      </div>
    </Fragment>
  );
}
