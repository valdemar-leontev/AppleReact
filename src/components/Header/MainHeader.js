import React from "react";
import styles from "./MainHeader.module.css";
import { AiFillApple, AiOutlineSearch } from "react-icons/ai";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <header className={styles.container}>
      <AiFillApple size={25} color={"white"} className={styles.icon} />
      <ul className={styles.menu}>
        <li>
          <a href="/">Shop</a>
        </li>
        <li>
          <a href="/">Mac</a>
        </li>
        <li>
          <a href="/">iPad</a>
        </li>
        <li>
          <a href="/">iPhone</a>
        </li>
        <li>
          <a href="/">Watch</a>
        </li>
        <li>
          <a href="/">TV</a>
        </li>
        <li>
          <a href="/">Music</a>
        </li>
        <li>
          <a href="/">Help</a>
        </li>
        <li>
          <AiOutlineSearch color="grey" size="22" />
        </li>

        <Link to="/customer-basket">
          <RiShoppingBasket2Line color="grey" size="22" />
        </Link>

        <Link to="/registration">
          <BsPerson color="grey" size="22" />
        </Link>
      </ul>
    </header>
  );
};

export default MainHeader;
