import React from "react";
import {Link} from "react-router-dom";
import styles from "./ProductHeader.module.css";
import Button from "../../UI/Button";

const ProductHeader = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <span>AirPods Max</span>

        <div className={styles.buttons}>
          <Link to="/">
            <p>Review</p>
          </Link>

          <Link to="/specification">
            <p>Specification</p>
          </Link>

          <Button width={65} height={23} fontSize={12} marginTop={0}>Buy</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
