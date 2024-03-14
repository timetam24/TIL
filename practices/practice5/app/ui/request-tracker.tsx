"use client";

import { useState } from "react";

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending((p) => p + 1); //⭐
    await delay(3000);
    setPending((p) => p - 1); //⭐
    setCompleted(completed + 1);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h3>Pending: {pending}</h3>
      <h3>Completed: {completed}</h3>
      <button onClick={handleClick}>Buy</button>
    </div>
  );
}

function delay(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
