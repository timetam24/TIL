"use client";

import Counter from "@/containers/count/counter";
import { useState } from "react";

export default function CountPage() {
  const [isPaused, setIsPaused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPaused(e.target.checked);
  };

  return (
    <div className="flex gap-12 justify-center min-h-screen items-center bg-black text-white">
      {isPaused ? <p>See you later!</p> : <Counter />}
      {/* ↑ 같은 자리의 다른 컴포넌트 ↑*/}
      <Label isPaused={isPaused} onchange={handleChange} />
    </div>
  );
}

interface LabelProps {
  isPaused: boolean;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Label({ isPaused, onchange }: LabelProps) {
  return (
    <label>
      <input
        type="checkbox"
        className="font-inter mr-1"
        checked={isPaused}
        onChange={onchange}
      />
      Take a break
    </label>
  );
}
