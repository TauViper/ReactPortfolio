import React from "react";
import classes from "./Footer.module.css";
import classNames from "classnames";

export const FooterCenter = () => {
  return (
    <section className={classNames(classes.footer__center, classes.container)}>
      <div className={classes.footer__right}>
        <img src="img/footer_face.png" alt="footer_face" />
        <p>
          "Vestibulum quis porttitor dui! Quisque viverra nunc mi,
          a&nbsp;pulvinar purus condimentum"
        </p>
      </div>
      <div className={classes.footer__subscribe}>
        <p>
          <b>SUBSCRIBE</b> <br />
          FOR OUR NEWLETTER AND PROMOTION
        </p>
        <form action="#">
          <input id="email" type="email" placeholder="Enter Your Email" />
          <button>Subscribe</button>
        </form>
      </div>
    </section>
  );
};
