"use client";

import styles from "./declarative-form.module.css";
import { mrDeHaviland } from "./fonts";

const Form = () => {
  return (
    <form className={styles.form}>
      <h1 className={styles.title}>
        What's your favorite <span className={mrDeHaviland.className}>c</span>
        olor<span className={mrDeHaviland.className}>?</span>
      </h1>
      <div className={styles.textInputContainer}>
        <input
          type="text"
          placeholder="answer here..."
          className={styles.textInput}
        />
        <button className={styles.submitButton}>Submit</button>
      </div>
    </form>
  );
};

export default Form;
