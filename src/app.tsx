import { Routes, Route } from "react-router";

import Layout from "./layout";
import ProductList from "./features/products/product-list";
import Cart from "./features/cart/cart";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProductList />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}