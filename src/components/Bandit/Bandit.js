import React from "react";
import styles from "./Bandit.module.css";
import "./Bandit.css";
import ScrollAnimatedBlock from "../../components/ScrollAnimatedBlock/ScrollAnimatedBlock";

const Bandit = () => {
  return (
    <ScrollAnimatedBlock animationClass={"ringActivation"}>
      <div className={styles.mainContainer}>
        <div className={styles.bandit}>
          <div data-animated className={styles.topMagicRings}></div>
          <div data-animated className={styles.bottomMagicRings}></div>

          <p data-animated className={styles.text}>
            <span style={{ color: "white" }}>
              Spatial audio with dynamic head tracking
            </span>
            gives you a theater‑like experience for movies and shows, with sound
            that surrounds you.1 Using built-in gyroscopes and accelerometers,
            AirPods Max and your iPhone or iPad track the subtle motion of your
            head, anchoring sounds to your device.
          </p>
        </div>
      </div>
    </ScrollAnimatedBlock>
  );
};

export default Bandit;
