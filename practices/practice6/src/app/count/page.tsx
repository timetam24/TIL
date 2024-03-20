"use client";

import Counter from "@/containers/count/counter";
import { useState } from "react";

export default function CountPage() {
  const [isFancy, setIsFancy] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFancy(e.target.checked);
  };

  return (
    <div className="flex gap-12 justify-center min-h-screen items-center bg-black">
      {isFancy ? <Counter isFancy={true} /> : <Counter isFancy={false} />}
      {/* ↑ 같은 자리의 같은 컴포넌트 ↑*/}
      <Label isFancy={isFancy} onchange={handleChange} />
    </div>
  );
}

interface LabelProps {
  isFancy: boolean;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Label({ isFancy, onchange }: LabelProps) {
  return (
    <label className="text-white">
      <input
        type="checkbox"
        className="font-inter mr-1"
        checked={isFancy}
        onChange={onchange}
      />
      Use Fancy Styling
    </label>
  );
}
