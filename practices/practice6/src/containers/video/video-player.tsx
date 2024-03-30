"use client";

import { useState, useRef } from "react";
import clsx from "clsx";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);
    nextIsPlaying ? videoRef.current!.play() : videoRef.current!.pause();
  }

  return (
    <div className="flex flex-col gap-10 p-4 rounded-2xl ">
      <video
        width="800"
        ref={videoRef}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src="https://videos.pexels.com/video-files/2025634/2025634-hd_1280_720_25fps.mp4"
          type="video/mp4"
        />
      </video>
      <button
        onClick={handleClick}
        className={clsx("rounded py-2 text-xl uppercase font-uniform", {
          "bg-[#ceedd5]": isPlaying,
          "bg-[#f597a7]": !isPlaying,
        })}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
}
