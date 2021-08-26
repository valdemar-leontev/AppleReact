import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductHeader.module.css";

const ProductHeader = () => {
  return (
    <div className={styles.container}>
      <section>
        <span>AirPods Max</span>

        <div className={styles.buttons}>
          <Link to="/">
            <p>Review</p>
          </Link>

          <Link to="/specification">
            <p>Specification</p>
          </Link>

          <div className={styles.buy}>
            <a href="#">Buy</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductHeader;
