import React from 'react';
import styles from "./MyButton.module.css"

function MyButton(props) {
  return (
    <button onClick={props.onClick}  style={{width: props.width,height: props.height, fontSize: props.fontSize, marginTop: props.marginTop}} className={styles.button}>
      {props.children}
    </button>
  );
}

export default MyButton;
