"use client";

import { useState } from "react";
import axios from "axios";
import clsx from "clsx";

export default function ColorForm() {
  const [color, setColor] = useState("");
  const [status, setStatus] = useState("disabled");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
    setStatus(e.target.value.length !== 0 ? "typing" : "disabled");
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/color", { color });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      className="w-[40rem] h-80 py-8 px-6 bg-apricot rounded-md flex flex-col justify-between text-dark-green"
      onSubmit={submitForm}
    >
      <h1 className="uppercase font-bold whitespace-pre-wrap text-4xl min-[542px]:w-[70%] min-[455px]:w-[85%] max-[455px]:w-[100%] max-[353px]:text-3xl">
        What&#39;s your favorite{" "}
        <span className="font-haviland font-normal">c</span>
        olor<span className="font-haviland  font-normal">?</span>
      </h1>
      <div className="self-end flex gap-4 text-xl">
        <input
          type="text"
          placeholder="answer here..."
          className="text-inherit bg-inherit p-1 border-0 border-b-2 border-solid border-dark-green w-48 outline-0 focus:-translate-y-[1px] focus:border-b-2 focus:border-solid focus:border-dark-green transition-all duration-200 ease-in-out"
          onChange={handleChange}
        />
        <button
          className={clsx(
            "text-dark-green font-semibold bg-apricot py-1 px-2 border-2 border-solid border-dark-green rounded-md cursor-pointer  hover:bg-dark-green hover:text-apricot focus:bg-dark-green focus:text-apricot active:bg-dark-green active:text-apricot transition-all duration-200 ease-in-out  focus-visible:outline-none focus-visible:ring-offset-apricot focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-dark-green ",
            {
              "bg-dark-green text-red-100": status === "typing",
              "disabled:pointer-events-none disabled:opacity-50":
                status === "disabled",
            }
          )}
          disabled={status === "disabled"}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
