"use client";

import Counter from "@/containers/count/counter";
import { useState } from "react";

export default function CountPage() {
  const [isPlayerA, setIsPlayerA] = useState(true);

  return (
    <div className="flex flex-col gap-12 justify-center min-h-screen items-center bg-black text-white">
      {isPlayerA ? (
        <Counter key="Taylor" person="Taylor" />
      ) : (
        <Counter key="Sarah" person="Sarah" />
      )}
      {/* ↑ 같은 위치에서 State 초기화하기 ↑ */}
      <button
        onClick={() => {
          setIsPlayerA(!isPlayerA);
        }}
        className="bg-white text-black px-4 py-1 rounded font-uniform text-2xl hover:bg-red-500"
      >
        NEXT PLAYER
      </button>
    </div>
  );
}
