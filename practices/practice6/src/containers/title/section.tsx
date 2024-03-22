import { ReactNode } from "react";

export default function Section({ children }: { children: ReactNode }) {
  return (
    <section className="border-2 border-black m-2 p-2 rounded">
      {children}
    </section>
  );
}
