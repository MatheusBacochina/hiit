"use client";

import { useRef, useState } from "react";

const Items = () => {
  const [videoStartedHideImage, setVideoStartedHideImage] =
    useState<boolean>(true);

  return (
    <>
      <div className=" shrink-1 flex grow-0 basis-[512px] flex-col  items-start justify-center gap-3  max-[1128px]:items-center max-[1128px]:gap-6   ">
        <h1 className="max-[1128px]:text-center">
          <span className="item align-bottom text-[32px] font-normal uppercase tracking-[3.20px] text-white   max-md:items-center">
            Você pode ser aprovado nessa{" "}
          </span>
          <span className="text-[32px] font-bold uppercase tracking-[3.20px] text-white">
            reta final
          </span>
          <span className="text-[32px] font-normal uppercase tracking-[3.20px] text-white">
            {" "}
            mesmo com uma{" "}
          </span>
          <span className="text-[32px] font-bold uppercase tracking-[3.20px] text-purple-600">
            rotina apertada
          </span>
          <span className="text-[32px] font-normal uppercase tracking-[3.20px] text-white">
            .
          </span>
        </h1>
        <span className="max-w-lg text-start text-lg font-normal leading-[25px] text-white  max-[1128px]:text-center">
          Tenha acesso ao Protocolo de Revisão Intensivo MedCof e seja capaz de
          revisar, aprofundar e reter os principais conteúdos em 12 semanas.
        </span>
        <button className="h-[51px] w-[307px] rounded-[10px] bg-gradient-to-r from-purple-600 to-blue-400 text-sm font-semibold leading-[25px] text-white">
          QUERO PARTICIPAR DO HIIT AGORA!
        </button>
      </div>
      <div className="contain video__container h-[406px] w-[476px] overflow-hidden  rounded-[10px] bg-black ">
        {videoStartedHideImage && (
          <div
            onClick={() => setVideoStartedHideImage(false)}
            className="absolute h-full w-full bg-[url('/images/header/thumbvideo.png')] bg-cover bg-center transition-all hover:scale-110 hover:cursor-pointer"
          ></div>
        )}
        <iframe
          className="aspect-video w-full"
          width="476"
          height="406"
          allowFullScreen={true}
          src={`https://www.youtube.com/embed/B3gAZvncfa0?autoplay=${
            videoStartedHideImage ? 1 : 0
          }&mute=0`}
        ></iframe>
      </div>
    </>
  );
};

export default Items;
