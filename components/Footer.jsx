import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.section}>
      <p className={styles.p}>
        Made by{" "}
        <a
          href="https://github.com/StanTheMackiar"
          target="_blank"
          rel="noopener noreferrer">
          <b>StanTheMackiar</b>
        </a>
      </p>
      <p className={styles.p}>
        Copyright{" "}
        <a
          href="https://xkcd.com/"
          target="_blank"
          rel="noopener noreferrer">
          <b>xkcd</b>{" "}
        </a>
      </p>
    </footer>
  );
};

export default Footer;
