import React, {useCallback, useState} from 'react';
import styles from "./PurchaseHeader.module.css"
import "./PurchaseHeader.css"

function PurchaseHeader() {
  const [isButtonDropDown, setIsButtonDropDown] = useState(false);

  const toggleDropDown = useCallback(() => {
    const hiddenText = document.querySelector(".hiddenText");

    if (isButtonDropDown === false) {
      hiddenText.classList.add("active");
    } else {
      hiddenText.classList.remove("active");
    }
    setIsButtonDropDown(!isButtonDropDown);
  }, [isButtonDropDown]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.firstHeader}>
          <span className={styles.title}>Checkout</span>
          <div className={styles.info}>Show Order Information: 289,990.00</div>
        </div>
        <div onClick={toggleDropDown} className={styles.secondHeader}>
          <h1>Delivery details.</h1>
          <h2>Delivery: <div style={{color: "#2d7ed5"}}>420047</div></h2>
          <div className="hiddenText">HEllO I AM HIDDEN TEXT</div>
        </div>
      </div>
    </div>
  );
}

export default PurchaseHeader;
