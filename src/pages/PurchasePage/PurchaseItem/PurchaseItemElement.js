import React from 'react';
import styles from "./PurchaseElement.module.css"

function PurchaseItemElement({productItem}) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.purchaseItem}>
        <div className={styles.title}>Dispatch in 3-4 weeks.</div>
        <div className={styles.mainInfo}>
            <img className={styles.image} src={productItem.imageUrl} alt=""/>
          <div className={styles.description}>{productItem.name}, {productItem.color}, {productItem.price}</div>
        </div>
      </div>

    </div>
  );
}

export default PurchaseItemElement;
