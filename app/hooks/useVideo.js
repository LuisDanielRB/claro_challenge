"use client";

import { useState } from "react";

export default function useVideo(initialValue) {
  const [video, setVideo] = useState({
    titulo: "TEAM LATAM",
    contenido: "Los Deportistas latinoamericanos que participan en Sochi 2014",
    video: "https://www.youtube.com/embed/ajum_1JxdbE",
    img: initialValue.img,
  });

  const handleVideo = (video) => {
    setVideo(video);
  };

  return {
    video,
    handleVideo,
  };
}
