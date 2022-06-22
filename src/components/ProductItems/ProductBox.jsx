import React from "react";
import classes from "./ProductBox.module.css";
import Product from "../../Product.json";

export const ProductBox = () => {
  return Product.map((item) => (
    <div className={classes.product__box} key={item.id}>
      <div className={classes.item}>
        <img src={item.img} alt={item.item} />
        <a href="product.html">Add to Cart</a>
      </div>
      <h2>
        <b>{item.name}</b>
      </h2>
      <p>{item.discr}</p>
      <span>{item.price} $</span>
    </div>
  ));
};
