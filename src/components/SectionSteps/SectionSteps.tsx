import { ReactNode } from "react";
import { StepComponent } from "@/components/StepComponent";
import Image from "next/image";
export const SectionSteps = ({
  children,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <section className=" bg-[url('/images/main/bgsteps.png')]  bg-cover bg-center bg-no-repeat  ">
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
            São <span className="font-semibold">+155</span> professores em nossa
            equipe e todas as aulas são ministradas por médicos especialistas da
            área. <span className="font-semibold">Especialistas</span> que fazem
            as questões da sua prova. Nada melhor do que aprender com
            especialistas para entrar na mente do examinador!
          </>
        }
      >
        <Image
          className=" rocket__element_animation absolute bottom-0 right-0 z-[1] max-lg:hidden"
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
            O nosso cronograma é simples e eficaz. Tudo foi pensado para você
            conseguir estudar os conteúdos mais relevantes e ter uma
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
        headline="Acesso ao QBank – Banco de questões digital:"
        maxWidthParagraph={782}
        paragraph={
          <>
            Você pode incluir em seu treinamento o qBank mais atualizado e
            avançado que existe! Utilizamos recursos de revisão espaçada e 
            inteligência artificial para sua evolução. Além de possuir
            <span className="font-semibold"> +20.000 questões autorais </span>
            comentadas por especialistas em vídeo ou texto, contamos também com
            +10000 flash-cards, com revisões inteligentes. Uma ferramenta
            poderosa,{" "}
            <span className="font-semibold">
              utilizada por mais 217 primeiros lugares ano passado! 
            </span>
          </>
        }
      ></StepComponent>
    </section>
  );
};
