import React from "react";
import styles from "./MainHeader.module.css";
import { AiFillApple } from "react-icons/ai";

const MainHeader = () => {
  return (
    <header className={styles.container} >
      <AiFillApple size={25} color={"white"} className={styles.icon} />
      <ul className={styles.menu}>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">Mac</a>
        </li>
        <li>
          <a href="#">iPad</a>
        </li>
        <li>
          <a href="#">iPhone</a>
        </li>
        <li>
          <a href="#">Watch</a>
        </li>
        <li>
          <a href="#">TV</a>
        </li>
        <li>
          <a href="#">Music</a>
        </li>
        <li>
          <a href="#">Help</a>
        </li>
      </ul>
    </header>
  );
};

export default MainHeader;
