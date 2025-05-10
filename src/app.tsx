import ProductList from "./features/products/product-list";
import styles from "./app.module.css"

export default function App() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Produkty</h1>
        <button className="btn btn-primary">Koszyk</button>
      </div>
      <ProductList />
    </div>
  )
}