import React from "react";
import logo from "../assets/Logo.png";
import kitchen from "../assets/kitchen.png";
import head_burger from "../assets/head_burger.png";
import styles from "./header.module.scss";

export default function Header({ onLogout }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapperLogo}>
          <img src={logo} alt="Logo" />
          <img src={kitchen} alt="kitchen" />
        </div>
        <div className={styles.wrapperBurgeradd}>
          <img src={head_burger} alt="head_burger" />
          <div className={styles.wrapInfo}>
            <h1>Только самые</h1>
            <h2>сочные бургеры!</h2>
            <p>Бесплатная доставка от 999₽</p>
            <button onClick={onLogout}>Выйти</button>
          </div>
        </div>
      </header>
    </>
  );
}
