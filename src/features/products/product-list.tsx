import { Fragment } from "react"
import { useNavigate } from "react-router"

import products from "@/utils/products.json"
import { useCart } from "@/lib/cart-context"
import { CartActions } from "@/utils/types"
import type { Product } from "@/utils/types"

import styles from "./product-list.module.css"

export default function ProductList() {
  const navigate = useNavigate();
  const { dispatch, cart } = useCart();

  const addProductToCart = (product: Product) => {
    dispatch({ type: CartActions.ADD_TO_CART, payload: product });
  };

  return (
    <Fragment>
      <div className="header">
        <h1>Produkty</h1>
        <button className="btn btn-primary" onClick={() => navigate("/cart")}>Koszyk: {cart.length}</button>
      </div>
      <div className={styles.productList}>
      {products.map(product => (
        <div className={styles.productCard} key={product.id}>
          <div>
            <h2 className={styles.productName}>{product.name}</h2>
            <p className={styles.productPrice}>{product.price.main}.{product.price.fractional} zł</p>
          </div>
          <div>
            <button className="btn btn-primary" onClick={() => addProductToCart(product)}>Dodaj do koszyka</button>
          </div>
        </div>
      ))}
    </div>
    </Fragment>
  )
}