"use client";

import { useState } from "react";
import clsx from "clsx";

export default function Counter({ person }: { person: string }) {
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
      <div className="font-inter font-extrabold text-lg text-black flex flex-col items-center gap-10 mt-4">
        <p>
          <span className="text-red-500">{person}</span>&apos;s score:
        </p>
        <p className="text-6xl">{score}</p>
      </div>
      <button
        onClick={() => setScore(score + 1)}
        className="bg-black text-[#F2F2F2] px-4 py-1 rounded  font-uniform mt-auto mb-4 hover:bg-indigo-700"
      >
        ADD ONE
      </button>
    </div>
  );
}
