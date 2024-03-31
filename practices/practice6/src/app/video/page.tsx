"use client";

import VideoPlayer from "@/containers/video/video-player";
import { useState } from "react";
import clsx from "clsx";

const VideoPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState("");

  return (
    <main className="flex min-h-screen w-full justify-center items-center bg-black">
      <div className="flex flex-col gap-10 p-4 rounded-2xl ">
        <VideoPlayer
          isPlaying={isPlaying}
          src="https://videos.pexels.com/video-files/2025634/2025634-hd_1280_720_25fps.mp4"
        />
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={clsx("rounded py-2 text-xl uppercase font-uniform", {
            "bg-[#ceedd5]": isPlaying,
            "bg-[#f597a7]": !isPlaying,
          })}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </main>
  );
};

export default VideoPage;
