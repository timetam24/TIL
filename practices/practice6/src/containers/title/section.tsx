"use client";

import { useContext } from "react";
import { LevelContext } from "./level-context";

export default function Section({ children }: { children: React.ReactNode }) {
  const level = useContext(LevelContext);

  return (
    <section className="border-2 border-black m-2 p-2 rounded">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
