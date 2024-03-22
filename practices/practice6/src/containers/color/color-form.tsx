"use client";

import { useState } from "react";
import axios from "axios";
import clsx from "clsx";
import { Toaster, toast } from "react-hot-toast";
import { MdiHeart } from "@/lib/icons";
import { useFormStatus } from "react-dom";

export default function ColorForm() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const showSuccessMessage = () => {
    toast.success(`Your favorite color is ${color}!`, {
      style: {
        fontWeight: "bold",
      },
      icon: <MdiHeart color={color} />,
      duration: 2000,
    });
  };

  const submitForm = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    try {
      await axios.post("/api/color", { color });
      showSuccessMessage();
      setColor("");
    } catch (error: any) {
      setError(error);
    }
  };

  return (
    <form
      className="w-[40rem] h-80 py-8 px-6 bg-apricot rounded-md flex flex-col justify-between text-dark-green"
      action={submitForm}
    >
      <Toaster />
      <h1 className="uppercase font-bold whitespace-pre-wrap text-4xl min-[542px]:w-[70%] min-[455px]:w-[85%] max-[455px]:w-[100%] max-[353px]:text-3xl">
        What&#39;s your favorite{" "}
        <span className="font-haviland font-normal">c</span>
        olor<span className="font-haviland  font-normal">?</span>
      </h1>
      <Form color={color} handleChange={handleChange} />
      {error !== null && <p className="Error">{error}</p>}
    </form>
  );
}

function Form({
  color,
  handleChange,
}: {
  color: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const { pending, data } = useFormStatus();

  return (
    <div className="font-inter self-end flex flex-col text-xl gap-1">
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="answer here..."
          className="text-inherit bg-inherit p-1 border-0 border-b-2 border-solid border-dark-green w-48 outline-0 focus:-translate-y-[1px] focus:border-b-2 focus:border-solid focus:border-dark-green transition-all duration-200 ease-in-out"
          value={color}
          name="color"
          onChange={handleChange}
          disabled={pending}
        />
        <button
          type="submit"
          className={clsx(
            "text-dark-green font-semibold bg-apricot py-1 px-2 border-2 border-solid border-dark-green rounded-md cursor-pointer  hover:bg-dark-green hover:text-apricot focus:bg-dark-green focus:text-apricot active:bg-dark-green active:text-apricot transition-all duration-200 ease-in-out  focus-visible:outline-none focus-visible:ring-offset-apricot focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-dark-green ",
            {
              "bg-dark-green text-red-100": color.length > 0,
              "disabled:pointer-events-none disabled:opacity-50":
                color.length === 0 || pending,
            }
          )}
          disabled={color.length === 0 || pending}
        >
          {pending ? "Submitting..." : "Submit"}
        </button>
      </div>
      <p className="font-semibold">
        {data ? `Sending ${data?.get("color")}...` : ""}
      </p>
    </div>
  );
}
