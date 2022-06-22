// import "./App.css";
import React from "react";
import { Footer } from "./components/Footer/Footer";

import { Header } from "./components/Header/Header";
import { Product } from "./components/ProductItems/Product";
import { UnderHeader } from "./components/UnderHeader/UnderHeader";
export function App() {
  return (
    <>
      <Header />
      <main>
        <UnderHeader />
        <Product />
      </main>

      <Footer />
    </>
  );
}
