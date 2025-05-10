import { Routes, Route } from "react-router";

import Layout from "./layout";
import ProductList from "./features/products/product-list";
import Cart from "./features/cart/cart";
import Checkout from "./features/checkout/checkout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProductList />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}