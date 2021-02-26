import React from "react";
import styles from "./styles.module.css";
import left from "./left.svg";
import right from "./right.svg";

function Cover() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <img className={styles.left} src={left} alt="left" />
        <img className={styles.right} src={right} alt="right" />

        <div className={styles.text}>
          <h1 className={styles.heading1}>
            Together we are strong, <br />{" "}
            <span className={styles.span}>
              One-stop solution for all banking needs
            </span>
          </h1>
          <p className={styles.paragraph}>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Cover;
