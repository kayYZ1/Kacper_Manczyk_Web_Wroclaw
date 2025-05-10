
import products from "@/utils/products.json"
import styles from "./product-list.module.css"

export default function ProductList() {
  return (
    <div className={styles.productList}>
      {products.map(product => (
        <div className={styles.productCard} key={product.id}>
          <div className={styles.productInfo}>
            <h2 className={styles.productName}>{product.name}</h2>
            <p className={styles.productPrice}>{product.price.main}.{product.price.fractional} zł</p>
          </div>
          <div className={styles.productActions}>
            <button className="btn btn-primary">Dodaj do koszyka</button>
          </div>
        </div>
      ))}
    </div>
  )
}