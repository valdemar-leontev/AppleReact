import React from "react";
import ScrollAnimatedBlock from "../ScrollAnimatedBlock/ScrollAnimatedBlock";
import styles from "./Case.module.css";
import "./Case.css";

const Case = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <ScrollAnimatedBlock animationClass={"caseAnimation"}>
          <div className={styles.textContainer}>
            <div data-animated className={styles.header}>
              A case with staying power
            </div>
            <div data-animated className={styles.description}>
              When stored in their soft, slim{" "}
              <span style={{ color: "black" }}>Smart Case, AirPods Max</span> enter an
              ultra‑low‑power state that preserves charge.
            </div>
          </div>
        </ScrollAnimatedBlock>
        <ScrollAnimatedBlock animationClass={"caseAnimation"}>
          <div data-animated className={styles.img}></div>
        </ScrollAnimatedBlock>
      </div>
    </div>
  );
};

export default Case;
