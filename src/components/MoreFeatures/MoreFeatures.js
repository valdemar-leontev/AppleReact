import React from "react";
import styles from "./MoreFeatures.module.css";
import "./MoreFeatures.css";
import ScrollAnimatedBlock from "../../components/ScrollAnimatedBlock/ScrollAnimatedBlock";

const MoreFeatures = () => {
  return (
    <div className={styles.mainContainer}>
      <ScrollAnimatedBlock animationClass={"featuresAnimation"}>
        <div className={styles.titleContainer}>
          <p data-animated className={styles.subTitle}>
            Magical experience
          </p>
          <p data-animated className={styles.mainTitle}>
            Elaborately simple.
          </p>
        </div>
      </ScrollAnimatedBlock>

      <ScrollAnimatedBlock animationClass={"featuresAnimation"}>
        <div className={styles.textContainer}>
          <p data-animated className={styles.text}>
            AirPods Max inherit all of the wireless, effortless magic of the
            AirPods family. From setup to Siri commands, they make the listening
            experience completely fluid — day to day, device to device.
          </p>
        </div>
      </ScrollAnimatedBlock>

      <ScrollAnimatedBlock animationClass={"featuresAnimation"}>
        <div className={styles.setup}>
          <div data-animated className={styles.image}></div>
          <p data-animated className={styles.description}>
            <p className={styles.descriptionTitle}>One-tap setup</p>
            AirPods Max connect immediately to your iPhone or iPad. To pair,
            simply place AirPods Max near your device and tap Connect on your
            screen
          </p>
        </div>
      </ScrollAnimatedBlock>

      <div className={styles.magicContainer}>
        <ScrollAnimatedBlock animationClass={"featuresAnimation"}>
          <h1 className={styles.header} data-animated>More magic to play with</h1>
        </ScrollAnimatedBlock>

        <div className={styles.itemsContainer}>
          <ScrollAnimatedBlock animationClass={"featuresAnimation"}>
            <div data-animated className={styles.item}>
              <h3>On-head detection</h3>
              <p>
                AirPods Max pause audio when you take them off, and resume
                playback when you put them back on. So you never miss a beat.
              </p>
            </div>
          </ScrollAnimatedBlock>
          <ScrollAnimatedBlock animationClass={"featuresAnimation"}>
            <div data-animated item2 className={styles.item}>
              <h3>Announce Messages</h3>
              <p>
                Let Siri speak incoming messages as they arrive with Announce
                Messages.4 You can even tell Siri to respond — no hands
                required.
              </p>
            </div>
          </ScrollAnimatedBlock>
          <ScrollAnimatedBlock animationClass={"featuresAnimation"}>
            <div data-animated item3 className={styles.item}>
              <h3>Always-on Siri</h3>
              <p>
                Get directions, check the weather, schedule a meeting, and more
                with a simple “Hey Siri.” With an expansive set of commands,
                your favorite personal assistant is more helpful than ever.
              </p>
            </div>
          </ScrollAnimatedBlock>
        </div>
      </div>
    </div>
  );
};

export default MoreFeatures;
