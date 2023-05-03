import React from 'react';
import styles from "./Button.module.css"

function Button(props) {
  return (
    <button onClick={props.onClick}  style={{width: props.width,height: props.height, fontSize: props.fontSize, marginTop: props.marginTop}} className={styles.button}>
      {props.children}
    </button>
  );
}

export default Button;
