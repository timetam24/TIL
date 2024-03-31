"use client";

import { useEffect, useRef } from "react";

interface VideoPlayerProps {
  isPlaying: boolean;
  src: string;
}

export default function VideoPlayer({ isPlaying, src }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (isPlaying) {
      console.log("video.play() 호출");
      videoRef.current!.play();
    } else {
      console.log("video.pause() 호출");
      videoRef.current!.pause();
    }
    console.log(
      "의존성 배열이 있는 useEffect라면 컴포넌트가 마운트될 때 실행되고 isPlaying이 변경된다면 실행됩니다."
    );
  }, [isPlaying]);

  // useEffect(() => {
  //   console.log(
  //     "의존성 배열이 없는 useEffect라면 모든 렌더링이 끝나고 실행됩니다."
  //   );
  // });

  // useEffect(() => {
  //   console.log(
  //     "빈 의존성 배열이 있는 useEffect라면 컴포넌트가 마운트될 때 실행됩니다."
  //   );
  // }, []);

  return (
    <video width="800" ref={videoRef}>
      <source src={src} type="video/mp4" />
    </video>
  );
}
