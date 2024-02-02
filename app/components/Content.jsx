"use client";

import Image from "next/image";

import CountdownTimer from "./CountdownTimer";
import useVideo from "../hooks/useVideo";

const VIDEOS = [
  {
    titulo: "TEAM LATAM",
    contenido: "Los Deportistas latinoamericanos que participan en Sochi 2014",
    video: "https://www.youtube.com/embed/ygluZ0tB8S4",
    img: "/img/team-latam.png",
  },
  {
    titulo: "TRAVEL MEETS FASHION",
    contenido: "Los Deportistas latinoamericanos que participan en Sochi 2014",
    video: "https://www.youtube.com/embed/NU-KfPZOUsk",
    img: "/img/travel-meets-fashion.png",
  },
  {
    titulo: "VELOCIDAD Y RIESGO",
    contenido: "Los Deportistas latinoamericanos que participan en Sochi 2014",
    video: "https://www.youtube.com/embed/CrVL5tM926s",
    img: "/img/velocidad-riesgo.png",
  },
  {
    titulo: "EXPERIENCIA MULTIMEDIA",
    contenido: "Los Deportistas latinoamericanos que participan en Sochi 2014",
    video: "https://www.youtube.com/embed/hgXKJvTVW9g",
    img: "/img/experiencia.png",
  },
];

const Content = () => {
  const { video, handleVideo } = useVideo(VIDEOS[0]);
  const countdownDate = new Date("12/31/2024");

  return (
    <section className="bg-stone-800">
      <div className="bg-[url(/img/background.jpg)] bg-no-repeat bg-cover pb-12">
        <h2 className="text-center text-3xl font-bold text-white py-8">
          FALTAN
        </h2>
        <CountdownTimer targetDate={countdownDate} />
        <iframe
          className="flex mx-auto my-8 h-[200px] w-[350px] md:h-[350px] md:w-[600px]"
          width="600"
          height="350"
          src={`${video.video}?autoplay=0&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="pb-10">
        <h1 className="text-white text-center text-3xl font-light py-10">
          CLARO SPORTS EN SOCHI 2014
        </h1>
        <div className="grid-cols-1 md:flex justify-center gap-x-4 mx-10">
          {VIDEOS.map((e, i) =>
            e.titulo === video.titulo ? (
              <div key={i} className="flex flex-col justify-center">
                <div className="flex mx-auto items-center text-center bg-red-700 border-none rounded-full h-[180px] w-[180px]">
                  <span className="mb-8 text-white font-extralight text-sm">
                    {e.contenido}
                  </span>
                </div>
                <div className="flex mx-auto items-stretch">
                  <span className="mt-4 text-white">{e.titulo}</span>
                </div>
              </div>
            ) : (
              <div key={i}>
                <div className="" onClick={() => handleVideo(e)}>
                  <Image
                    className="flex mx-auto"
                    src={e.img}
                    alt={`imagen ${e.titulo}`}
                    width={200}
                    height={1200}
                  />
                </div>
                <div className="flex justify-center">
                  <span className="text-center text-white">{e.titulo}</span>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Content;
