"use client";

import { Button } from "@/stories/Button";
import { useState } from "react";
import styles from "./form.module.css";

export default function Form() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((count) => count + 1);
  };

  return (
    <form className={styles.form}>
      <MyButton onClick={handleCount} count={count} />
      <MyButton onClick={handleCount} count={count} />
    </form>
  );
}

function MyButton({ onClick, count }: { onClick: () => void; count: number }) {
  return (
    <div>
      <Button label={`Clicked ${count}`} primary={true} onClick={onClick} />
    </div>
  );
}
