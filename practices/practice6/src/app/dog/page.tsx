"use client";

import { useRef } from "react";
import Image from "next/image";

export default function DogPage() {
  const firstDogRef = useRef<HTMLImageElement>(null);
  const secondDogRef = useRef<HTMLImageElement>(null);
  const thirdDogRef = useRef<HTMLImageElement>(null);

  const handleScrollToFirstDog = () => {
    firstDogRef.current!.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  function handleScrollToSecondDog() {
    secondDogRef.current!.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function handleScrollToThirdDog() {
    thirdDogRef.current!.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <main>
      <nav className="font-uniform  fixed top-0 left-1/2 -translate-x-1/2 flex w-full">
        <button
          onClick={handleScrollToFirstDog}
          className="uppercase border-b-2 border-black text-3xl grow py-6 font-semibold hover:bg-black hover:text-white"
        >
          cute
        </button>
        <button
          onClick={handleScrollToSecondDog}
          className="uppercase border-b-2 border-black text-3xl grow py-6 font-semibold border-x-2 hover:bg-black hover:text-white"
        >
          cool
        </button>
        <button
          onClick={handleScrollToThirdDog}
          className="uppercase border-b-2 border-black text-3xl grow py-6 font-semibold hover:bg-black hover:text-white"
        >
          pure
        </button>
      </nav>
      <div className="mt-40 max-w-1/3">
        <ul className="flex overflow-x-auto whitespace-nowrap max-w-full gap-96 px-96 scrollbar">
          <li className="bg-green-50 rounded p-10 ">
            <Image
              src="https://placedog.net/500/280?id=21"
              alt="cute"
              width={500}
              height={280}
              ref={firstDogRef}
              className="max-w-[500px] max-h-[280px]"
            />
          </li>
          <li className="bg-slate-100 rounded p-10">
            <Image
              src="https://placedog.net/500/280?id=23"
              alt="cool"
              width={500}
              height={280}
              ref={secondDogRef}
              className="max-w-[500px] max-h-[280px]"
            />
          </li>
          <li className="bg-indigo-50 rounded p-10">
            <Image
              src="https://placedog.net/500/280?id=28"
              alt="pure"
              width={500}
              height={280}
              ref={thirdDogRef}
              className="max-w-[500px] max-h-[280px]"
            />
          </li>
        </ul>
      </div>
    </main>
  );
}
