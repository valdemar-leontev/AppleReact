import React, {useCallback, useState} from 'react';
import styles from "./PurchaseElement.module.css"
import Button from "../../../components/UI/Button";

function PurchaseElement(props) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.purchaseItem}>
        <div className={styles.title}>Dispatch in 3-4 weeks.</div>
        <div className={styles.mainInfo}>
          <div className={styles.image}></div>
          <div className={styles.description}>MacBook Pro <br/> 14-inch <br/> Space Gray</div>
        </div>
      </div>

      <Button>Proceed</Button>
    </div>
  );
}

export default PurchaseElement;
