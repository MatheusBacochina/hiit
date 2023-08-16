"use client";
import Image from "next/image";
import { useState } from "react";

interface User {
  path: string;
  name: string;
  place: string;
  university: string;
  text: string;
}

export const SectionLargeCarrosselImages = () => {
  const [indexCurrentUser, setIndexCurrentUser] = useState<number>(0);
  const usersArray: User[] = [
    {
      path: "/images/main/userslarge/userlarge1.png",
      name: "Giuliana Saidel",
      place: "1º lugar Marketing",
      university: "UNIMEDCOF",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae doloribus mollitia voluptatem est tenetur laborum illo velit alias ab. Consequuntur assumenda reiciendis maxime vitae, fuga repudiandae! Facere sit dicta perferendis.",
    },
    {
      path: "/images/main/userslarge/userlarge2.png",
      name: "Ysaac sem sobrenome",
      place: "1º lugar NEO4J",
      university: "UMEDCOF",
      text: "Lorem ipsum 2 dolor, sit amet consectetur adipisicing elit. Beatae doloribus mollitia voluptatem est tenetur laborum illo velit alias ab. Consequuntur assumenda reiciendis maxime vitae, fuga repudiandae! Facere sit dicta perferendis.",
    },
    {
      path: "/images/main/userslarge/userlarge1.png",
      name: "Giuliana Saidel",
      place: "1º lugar Marketing",
      university: "UNIMEDCOF",
      text: "Lorem ipsum 3 dolor, sit amet consectetur adipisicing elit. Beatae doloribus mollitia voluptatem est tenetur laborum illo velit alias ab. Consequuntur assumenda reiciendis maxime vitae, fuga repudiandae! Facere sit dicta perferendis.",
    },
  ];

  return (
    <div className="mt-20 flex flex-col items-center ">
      <h1 className="max-w-[922px] text-center text-2xl font-bold uppercase tracking-widest text-white">
        Eles se prepararam com o Intensivo MedCof e alcançaram esses resultados!{" "}
        <span className="text-purple-600">Você vai ficar de fora</span>?
      </h1>

      <div
        className={`relative mt-20 flex w-full max-w-[1290px] items-center justify-end gap-28 overflow-hidden rounded-2xl px-10 max-lg:flex-wrap max-lg:justify-center max-lg:gap-6 max-lg:py-12`}
      >
        <div
          style={{
            zIndex: 0,
            backgroundImage: `url(${usersArray[indexCurrentUser].path})`,
          }}
          className="bg__transition absolute right-0 h-full w-full bg-cover bg-center bg-no-repeat opacity-30 grayscale  "
        />
        <div className=" text__section z-50 flex max-w-[512px] flex-col items-end max-lg:items-center">
          <p className="text-right text-lg font-normal leading-6 tracking-widest text-white max-lg:text-center">
            {usersArray[indexCurrentUser].text}
          </p>
          <div className="mt-5 flex select-none  flex-col items-end max-lg:items-center ">
            <p className="text-right text-lg font-normal tracking-widest text-white">
              {usersArray[indexCurrentUser].name}
            </p>
            <p className="text-right text-lg font-normal tracking-widest text-white">
              {usersArray[indexCurrentUser].place}
            </p>
            <p className="text-right  text-lg font-bold tracking-widest text-white">
              {usersArray[indexCurrentUser].university}
            </p>
            <div className="arrow mt-4 flex max-w-min gap-3 max-lg:justify-center  ">
              <div
                className="cursor-pointer"
                onClick={(event) => {
                  event.preventDefault();
                  setIndexCurrentUser((prev: number) =>
                    prev > 0 ? prev - 1 : prev,
                  );
                }}
              >
                <svg
                  className="rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="34"
                  viewBox="0 0 35 34"
                  fill="none"
                >
                  <path
                    d="M33.75 17C33.75 25.6646 26.509 32.75 17.5 32.75C8.49097 32.75 1.25 25.6646 1.25 17C1.25 8.33542 8.49097 1.25 17.5 1.25C26.509 1.25 33.75 8.33542 33.75 17Z"
                    stroke="white"
                    strokeOpacity={indexCurrentUser > 0 ? "1" : "0.33"}
                    stroke-width="2.5"
                  />
                  <path
                    d="M22.5 18L14.2424 24.3146C14.1036 24.4207 13.9077 24.4077 13.7842 24.2842C13.6342 24.1342 13.6518 23.8861 13.8215 23.7588L21.5 18L13.2812 10.7481C13.1288 10.6136 13.1215 10.3785 13.2651 10.2349C13.397 10.103 13.6088 10.0968 13.7482 10.2207L22.5 18Z"
                    stroke="white"
                    strokeOpacity={indexCurrentUser > 0 ? "1" : "0.33"}
                  />
                </svg>
              </div>
              <div
                className="cursor-pointer"
                onClick={(event) => {
                  event.preventDefault();
                  setIndexCurrentUser((prev: number) =>
                    prev < usersArray.length - 1 ? prev + 1 : prev,
                  );
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="34"
                  viewBox="0 0 35 34"
                  fill="none"
                >
                  <path
                    d="M33.75 17C33.75 25.6646 26.509 32.75 17.5 32.75C8.49097 32.75 1.25 25.6646 1.25 17C1.25 8.33542 8.49097 1.25 17.5 1.25C26.509 1.25 33.75 8.33542 33.75 17Z"
                    stroke="white"
                    strokeOpacity={
                      indexCurrentUser === usersArray.length - 1 ? "0.33" : "1"
                    }
                    stroke-width="2.5"
                  />
                  <path
                    strokeOpacity={
                      indexCurrentUser === usersArray.length - 1 ? "0.33" : "1"
                    }
                    d="M22.5 18L14.2424 24.3146C14.1036 24.4207 13.9077 24.4077 13.7842 24.2842C13.6342 24.1342 13.6518 23.8861 13.8215 23.7588L21.5 18L13.2812 10.7481C13.1288 10.6136 13.1215 10.3785 13.2651 10.2349C13.397 10.103 13.6088 10.0968 13.7482 10.2207L22.5 18Z"
                    stroke="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Image
          className="img__remove shrink-1   z-50  max-h-[438px] w-full max-w-[438px] select-none rounded-3xl object-cover"
          src={usersArray[indexCurrentUser].path}
          width={438}
          height={238}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};
