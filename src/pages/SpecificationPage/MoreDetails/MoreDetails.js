import React from "react";
import styles from './MoreDetails.module.css'
import './MoreDetails.css'


const MoreDetails = ({children}) => {
  return (
    <div className={styles.container}>
      <div data-animated className={styles.card}>
        {children}
      </div>
    </div>
  );
};

export default MoreDetails;
