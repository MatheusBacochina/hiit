"use client";
import { SmallImageForCarrocel } from "@/components/SmallImageForCarrocel";
import { ReactNode, useEffect, useRef, useState } from "react";
export const SmallCarrosselImages = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [canScrollWithTouch, setCanScrollWithTouch] = useState(false);
  const [alreadyScrollValue, setAlreadyScrollValue] = useState(0);
  const [clientXValue, setClientXValue] = useState(0);

  useEffect(() => {
    let event = (e: MouseEvent) => {
      e.preventDefault();
      if (ref.current) {
        ref.current.scrollLeft =
          alreadyScrollValue + (clientXValue - e.clientX);
      }
    };
    if (canScrollWithTouch) {
      window.addEventListener("mousemove", event);
      window.addEventListener("mouseup", () => {
        setCanScrollWithTouch(false);
      });
    }

    return () => {
      window.removeEventListener("mousemove", event);
    };
  }, [canScrollWithTouch, alreadyScrollValue, clientXValue]);
  return (
    <section className="flex justify-center">
      <div
        ref={ref}
        onMouseDown={(e) => {
          if (ref.current) {
            setClientXValue(e.clientX);
            setCanScrollWithTouch(true);
            setAlreadyScrollValue(e.currentTarget.scrollLeft);
          }
        }}
        className={`hidden__scrollbar mt-32 flex w-full max-w-[1092px] snap-x flex-row gap-4 overflow-scroll   ${
          canScrollWithTouch ? "" : "scroll-smooth"
        } `}
      >
        <SmallImageForCarrocel
          url="/images/main/users/user1.png"
          placing="1º lugar Design UX UI"
          university="UMEDCOF"
          userName="Carla Costantino"
          canSnap={canScrollWithTouch}
        ></SmallImageForCarrocel>
        <SmallImageForCarrocel
          url="/images/main/users/user2.png"
          placing="1º lugar Marketing"
          university="UMEDCOF"
          userName="Giuliana Saidel"
          canSnap={canScrollWithTouch}
        ></SmallImageForCarrocel>
        <SmallImageForCarrocel
          url="/images/main/users/user3.png"
          placing="1º lugar Design Gráfico"
          university="UMEDCOF"
          userName="Everton de Souza Oliveira"
          canSnap={canScrollWithTouch}
        ></SmallImageForCarrocel>
        <SmallImageForCarrocel
          url="/images/main/users/user4.png"
          placing="1º lugar NEO4J"
          university="UMEDCOF"
          userName="Ysaac sem sobrenome"
          canSnap={canScrollWithTouch}
        ></SmallImageForCarrocel>
        <SmallImageForCarrocel
          url="/images/main/users/user5.png"
          placing="1º lugar Elementor"
          university="UMEDCOF"
          userName="Aldo Mídia"
          canSnap={canScrollWithTouch}
        ></SmallImageForCarrocel>
        <SmallImageForCarrocel
          url="/images/main/users/user1.png"
          placing="1º lugar Design UX UI"
          university="UMEDCOF"
          userName="Carla Costantino"
          canSnap={canScrollWithTouch}
        ></SmallImageForCarrocel>
        <SmallImageForCarrocel
          url="/images/main/users/user2.png"
          placing="1º lugar Marketing"
          university="UMEDCOF"
          userName="Giuliana Saidel"
          canSnap={canScrollWithTouch}
        ></SmallImageForCarrocel>
        <SmallImageForCarrocel
          url="/images/main/users/user3.png"
          placing="1º lugar Design Gráfico"
          university="UMEDCOF"
          userName="Everton de Souza Oliveira"
          canSnap={canScrollWithTouch}
        ></SmallImageForCarrocel>
        <SmallImageForCarrocel
          url="/images/main/users/user4.png"
          placing="1º lugar NEO4J"
          university="UMEDCOF"
          userName="Ysaac sem sobrenome"
          canSnap={canScrollWithTouch}
        ></SmallImageForCarrocel>
        <SmallImageForCarrocel
          url="/images/main/users/user5.png"
          placing="1º lugar Elementor"
          university="UMEDCOF"
          userName="Aldo Mídia"
          canSnap={canScrollWithTouch}
        ></SmallImageForCarrocel>
      </div>
    </section>
  );
};
