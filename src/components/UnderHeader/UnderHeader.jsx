import React from "react";
import classes from "./UnderHeader.module.css";
import classNames from "classnames";

export const UnderHeader = () => {
  return (
    <div>
      <section className={classes.banner}>
        <div className={classNames(classes.under__header, classes.container)}>
          <h1>
            <b>the brand</b> of&nbsp;luxerious <span>fashion</span>
          </h1>
        </div>
      </section>
      <section>
        <div className={classNames(classes.box, classes.container)}>
          <div className={classNames(classes.card__box, classes.woman)}>
            <p>
              30% OFF <br />
              <span>
                <b>FOR&nbsp;WOMEN</b>
              </span>
            </p>
          </div>
          <div className={classNames(classes.card__box, classes.man)}>
            <p>
              HOT DEAL <br />
              <span>
                <b>FOR&nbsp;MEN</b>
              </span>
            </p>
          </div>
          <div className={classNames(classes.card__box, classes.kids)}>
            <p>
              NEW ARRIVALS <br />
              <span>
                <b>FOR&nbsp;KIDS</b>
              </span>
            </p>
          </div>
          <div className={classNames(classes.card__box, classes.accesories)}>
            <p>
              LUXIROUS&nbsp;&&nbsp;TRENDY <br />
              <span>
                <b>ACCESORIES</b>
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
