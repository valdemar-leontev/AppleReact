import React from "react";
import styles from "./DigitalCrown.module.css";

const DigitalCrown = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <span className={styles.text}>
          
          The <span style={{color: "white"}}>Digital Crown</span> lets you precisely control <br /> volume, skip between
          tracks, answer phone <br />calls, and activate Siri.
        </span>
      </div>
    </div>
  );
};

export default DigitalCrown;
