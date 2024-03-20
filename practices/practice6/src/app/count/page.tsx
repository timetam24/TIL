import Counter from "@/containers/count/counter";

export default function CountPage() {
  return (
    <div className="flex gap-12 justify-center min-h-screen items-center bg-black">
      <Counter /> {/* 독립된 state */}
      <Counter /> {/* 독립된 state */}
    </div>
  );
}
