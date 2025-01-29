import React from "react";
import styles from "./Header.module.css";

interface HeaderProps {
  userName:string;
  userImage:string;
}
const Header: React.FC<HeaderProps> = ({userName, userImage}) => {
  return (
    <header className={styles.header}>
      <div className={styles.userInfo}>
        <span>Olá, {userName}, seja bem-vindo!</span>
        <img src={userImage} className={styles.userImage}/>
      </div>
      <h1 className={styles.gradientText}>Copiloto Inteligente Para Cuidados com a Saúde</h1>
      <div className={styles.divider}></div>
    </header>
  );
};

export default Header;
