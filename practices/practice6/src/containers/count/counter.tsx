"use client";

import { useState } from "react";
import clsx from "clsx";

export default function Counter({ isFancy }: { isFancy: boolean }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  return (
    <div
      className={clsx(
        "w-40 h-60 bg-[#F2F2F2] flex flex-col items-center rounded-md",
        {
          "hover:bg-indigo-300": hover,
        }
      )}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1
        className={clsx("font-inter font-extrabold text-5xl mt-20", {
          "text-red-700": isFancy,
        })}
      >
        {score}
      </h1>
      <button
        onClick={() => setScore(score + 1)}
        className="bg-black text-[#F2F2F2] px-4 py-1 rounded  font-uniform mt-auto mb-4 hover:bg-indigo-700"
      >
        ADD ONE
      </button>
    </div>
  );
}
