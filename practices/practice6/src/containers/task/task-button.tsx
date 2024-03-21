import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

export default function Button({
  children,
  onClick,
  name,
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      onClick={onClick}
      className={clsx(`uppercase px-1 py-1 rounded bg-white font-semibold`, {
        "hover:bg-red-500": name === "delete",
        "hover:bg-blue-500": name === "add" || name === "save",
        "hover:bg-yellow-300": name === "edit",
      })}
    >
      {children}
    </button>
  );
}
