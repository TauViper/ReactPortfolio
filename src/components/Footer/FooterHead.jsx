import React from "react";
import Footer from "./Footer.json";
import classNames from "classnames";
import classes from "./Footer.module.css";

const FooterTab = Footer.map((item) => (
  <div
    className={classNames(
      classes.footer__box,
      classes[`footer__box--${item.box}`]
    )}
  >
    <h2>{item.title}</h2>
    <p>{item.content}</p>
  </div>
));

export const FooterHead = () => {
  return (
    <section className={classNames(classes.footer, classes.container)}>
      {FooterTab}
    </section>
  );
};
