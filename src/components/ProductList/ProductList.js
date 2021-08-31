import React from "react";
import styles from "./ProductList.module.css";
import "./ProductList.css";
import ScrollAnimatedBlock from "../ScrollAnimatedBlock/ScrollAnimatedBlock";

const ProductList = () => {
  return (
    <div className={styles.mainContainer}>
      <ScrollAnimatedBlock animationClass={"_active"}>
        <div className={styles.container}>
          <div data-animated className={styles.leftColumn}>
            <div></div>
          </div>

          <div className={styles.rightColumn}>
            <div data-animated className={styles.img1}></div>
            <p>
              Благодаря{" "}
              <span style={{ color: "black" }}>особой сетчатой ткани</span>{" "}
              <br /> амбушюры отличаются невероятной мягкостью.
            </p>
            <div data-animated className={styles.img2}></div>
            <p>
              <span style={{ color: "black" }}>Амбушюры </span>
              из акустически оптимизированного пеноматериала с эффектом памяти
              мягко закрывают ушную раковину, обеспечивают качественную
              звукоизоляцию и создают основу для потрясающего звука.
            </p>
          </div>
        </div>
      </ScrollAnimatedBlock>
    </div>
  );
};

export default ProductList;
