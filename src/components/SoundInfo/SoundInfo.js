import React from "react";
import styles from "./SoundInfo.module.css";

const SoundInfo = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <span className={styles.title}>
            Computational audio <br /> Key to performance
          </span>

          <p className={styles.text}>
            With a powerful Apple‑designed H1 chip in each cup, our custom
            acoustic design, and advanced software, AirPods Max use
            computational audio to create a breakthrough listening experience.
            By tapping into each chip’s 10 audio cores, computational audio
            helps block outside noise, adapts audio to the fit and seal of your
            ear cushions, and makes movie scenes sound like they’re happening
            all around you.
          </p>
        </div>

        <div className={styles.imageContainer}>
          <div className={styles.leftColumn}>
            <div className={styles.img1}></div>
            <p className={styles.leftText}>
              <span style={{ color: "white" }}>Adaptive EQ </span>
              tailors sound to the bespoke fit and seal created by the ear
              cushions. Inward-facing microphones measure what you’re hearing,
              then adjust the frequencies of your music to deliver a rich,
              consistent experience that faithfully reproduces every note.
            </p>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.img2}></div>
            <p>
              Industry‑leading{" "}
              <span style={{ color: "white" }}>Active Noise Cancellation</span>{" "}
              counters external sound with equal anti‑noise, allowing you to
              immerse yourself in what you’re listening to.
            </p>
            <p>
              Press the noise control button to switch to{" "}
              <span style={{ color: "white" }}>Transparency mode</span> , which
              lets outside sound in so you can interact naturally with your
              surroundings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoundInfo;
