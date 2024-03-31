"use client";

import { useState, useEffect } from "react";

export default function Playground() {
  const [text, setText] = useState("a");

  useEffect(() => {
    function onTimeout() {
      console.log("⏰ " + text);
    }

    console.log('🔵 스케줄 로그 "' + text);
    const timeoutId = setTimeout(onTimeout, 3000);

    return () => {
      console.log('🟡 취소 로그 "' + text);
      clearTimeout(timeoutId);
    };
  }, [text]);

  return (
    <>
      <label>
        What to log:{" "}
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <h1>{text}</h1>
    </>
  );
}
