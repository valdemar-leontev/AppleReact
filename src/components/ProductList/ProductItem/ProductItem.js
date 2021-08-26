import React from "react";
import styles from "./ProductItem.module.css";
import "./ProductItemAnimated.css";

const ProductItem = ({ title, description, isReversed, image }) => {
  return (
    <div
      style={{ flexDirection: isReversed ? "row" : "row-reverse" }}
      className={styles.card}
    >
      <div data-animated className={styles.text}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div
        data-animated
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </div>
  );
};

export default ProductItem;
