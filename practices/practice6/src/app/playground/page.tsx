"use client";

import { useState } from "react";
import Playground from "@/containers/playground/playground";

export default function PlaygroundPage() {
  const [show, setShow] = useState(false);

  return (
    <main>
      <button onClick={() => setShow(!show)}>
        컴포넌트 {show ? "언마운트" : "마운트"}
      </button>
      {show && <hr />}
      {show && <Playground />}
    </main>
  );
}
