import React from "react";
import { ProductBox } from "./ProductBox";
import classes from "./ProductBox.module.css";

export const Product = () => {
  return (
    <section className={classes.container}>
      <div className={classes.future}>
        <h2>Fetured Items</h2>
        <p>Shop for items based on what we featured in this week</p>
      </div>
      <div className={classes.product}>
        <ProductBox />
      </div>
      <form className={classes.browse}>
        <a href="catalog.html" target="_blank">
          Browse All Product
        </a>
      </form>
    </section>
  );
};
