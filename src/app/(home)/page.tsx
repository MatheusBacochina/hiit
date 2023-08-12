"use client";
import Image from "next/image";
import { Header } from "@/components/Header";
import { ContextInformation } from "@/components/ContextInformation";
import { InformationSectionHeader } from "@/components/InformationSectionHeader";
import { Nav } from "@/components/Nav";
import { Main } from "@/components/Main";
import { SectionSteps } from "@/components/SectionSteps";
import { SectionHeader } from "@/components/SectionHeader";
import { StepComponent } from "@/components/StepComponent";
import { spawn } from "child_process";
export default function HomePage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col items-center overflow-x-hidden overflow-y-scroll bg-black bg-center">
      <Header className="auto bg__header relative flex h-auto  w-full  flex-shrink-0 flex-col  bg-[url('/images/header/headerbg.png')] bg-cover  bg-center bg-no-repeat py-12 text-gray-800">
        <div className="linear__bottom absolute bottom-0  z-[0] h-[170px]  w-full bg-slate-300"></div>
        <Nav className="flex w-full  justify-center px-20"></Nav>
        <SectionHeader className="my-16 flex flex-row  items-center justify-center gap-[70px] px-28 max-xl:flex-wrap max-xl:gap-[30px] max-xl:px-12 max-md:px-11 2xl:my-24 ">
          <InformationSectionHeader />
        </SectionHeader>
      </Header>
      <Main className="h-auto w-full">
        <ContextInformation />
        <SectionSteps>
          <StepComponent
            direction="left"
            step={1}
            headline="Plataforma digital e aulas objetivas:
            "
            maxWidthParagraph={683}
            paragraph="Seus estudos não precisam ficar presos em um Auditório. O HIIT tem uma plataforma online, personalizada e muito simples de usar. São aulas curtas, objetivas e focadas na resolução de questões. Você pode estudar o conteúdo do Intensivo MedCof pelo celular, tablet ou computador, quando e onde quiser – de acordo com a sua rotina.
            "
          ></StepComponent>
          <StepComponent
            direction="right"
            step={2}
            headline="Pensando como um especialista:
            "
            maxWidthParagraph={538}
            paragraph={
              <>
                São <span className="font-semibold">+155</span> professores em
                nossa equipe e todas as aulas são ministradas por médicos
                especialistas da área.{" "}
                <span className="font-semibold">Especialistas</span> que fazem
                as questões da sua prova. Nada melhor do que aprender com
                especialistas para entrar na mente do examinador!
              </>
            }
          >
            <Image
              className="max-w-[1092]:none rocket__element_animation absolute bottom-0 right-0 z-[1]"
              src="/images/main/foquete.png"
              width={232}
              height={427}
              alt="Picture of the author"
            />
          </StepComponent>
          <StepComponent
            direction="left"
            step={3}
            headline="Revisão intensiva em 12 semanas:
            "
            maxWidthParagraph={538}
            paragraph={
              <>
                O nosso cronograma é simples e eficaz. Tudo foi pensado para
                você conseguir estudar os conteúdos mais relevantes e ter uma
                <span className="font-semibold">
                  {" "}
                  taxa de acertos acima de 80%.
                </span>
              </>
            }
          ></StepComponent>
          <StepComponent
            spaceBetween={false}
            direction="right"
            step={4}
            headline="Revisão intensiva em 12 semanas:
            "
            maxWidthParagraph={782}
            paragraph={
              <>
                Você pode incluir em seu treinamento o qBank mais atualizado e
                avançado que existe! Utilizamos recursos de revisão espaçada e 
                inteligência artificial para sua evolução. Além de possuir
                <span className="font-semibold">
                  {" "}
                  +20.000 questões autorais
                </span>{" "}
                +20.000 questões autorais comentadas por especialistas em vídeo
                ou texto, contamos também com +10000 flash-cards, com revisões
                inteligentes. Uma ferramenta poderosa, utilizada por mais 217
                primeiros lugares ano passado! 
                <span className="font-semibold">
                  utilizada por mais 217 primeiros lugares ano passado!
                </span>
              </>
            }
          ></StepComponent>
        </SectionSteps>
      </Main>
    </div>
  );
}
