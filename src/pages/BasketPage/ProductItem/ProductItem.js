import React from 'react';
import styles from "./ProductItem.module.css"
import {TiDelete} from "react-icons/ti";
import {toast, ToastContainer} from "react-toastify";

function ProductItem({basketItem, onRemoveCallback}) {

  return (
    <div className={styles.mainContainer}>
      <div>
        <img alt={basketItem.name} className={styles.productImage} src={basketItem.imageUrl}/>
      </div>

      <div className={styles.text}>
        <span>{basketItem.name}, {basketItem.color}, {basketItem.price} $</span>
      </div>

      <TiDelete onClick={async () => {await onRemoveCallback(basketItem.id); toast("Item deleted!!!");}} size={35} color={"grey"}/>

      <ToastContainer/>
    </div>
  );
}

export default ProductItem;
