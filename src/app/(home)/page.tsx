import { Header } from "@/components/Header";
import Image from "next/image";
import { SectionUnderstandWhoWeAre } from "@/components/SectionUnderstandWhoWeAre";
import { SectionInformation } from "@/components/SectionInformation";
import { InformationSectionHeader } from "@/components/InformationSectionHeader";
import { Nav } from "@/components/Nav";
import { Main } from "@/components/Main";
import { SectionSteps } from "@/components/SectionSteps";
import { SectionHeader } from "@/components/SectionHeader";
import { SmallCarrosselImages } from "@/components/SmallCarrosselImages";
import { MethodWasCreateSection } from "@/components/MethodWasCreateSection";
import { CheckTheScheduleComponent } from "@/components/CheckTheSchedule";
import { SmallTextNotice } from "@/components/SmallTextNotice";
import { BeyondTheScheduleSection } from "@/components/BeyondTheScheduleSection";
import { SectionPrices } from "@/components/SectionPrices";
import { ButtonMain } from "@/components/ButtonMain";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { SectionLargeCarrosselImages } from "@/components/SectionLargeCarrosselImages";
export default function HomePage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col items-center overflow-x-hidden overflow-y-scroll bg-black bg-center">
      <Header className="auto bg__header relative flex h-auto  w-full  flex-shrink-0 flex-col  bg-[url('/images/header/headerbg.png')] bg-cover  bg-center bg-no-repeat py-12 text-gray-800">
        <div className="linear__bottom absolute bottom-0  z-[0] h-[170px]  w-full "></div>
        <Nav className="flex w-full  justify-center px-20"></Nav>
        <SectionHeader className="my-16 flex flex-row  items-center justify-center gap-[70px] px-28 max-xl:flex-wrap max-xl:gap-[30px] max-xl:px-12 max-md:px-11 2xl:my-24 ">
          <InformationSectionHeader />
        </SectionHeader>
      </Header>
      <Main className=" h-auto w-full flex-col items-center">
        <SectionInformation
          paragraph={
            <>
              Criamos um Programa de 04 Pilares para você superar os problemas
              da falta de tempo e alcançar a tão sonhada aprovação.
            </>
          }
          basis={580}
          title="Entenda como o Intensivo MedCof vai te ajudar a ser aprovado mesmo
            com as dificuldades do dia a dia."
          className="flex items-center justify-center px-[94px] py-[74px] max-lg:px-[64px]"
        >
          <Image
            className="rotate-[-15deg]"
            src="/images/main/estetoscopio.png"
            width={350}
            height={350}
            alt="Picture of the author"
          />
        </SectionInformation>
        <SectionSteps />
        <MethodWasCreateSection />
        <SectionInformation
          paragraph={
            <>
              Nossos alunos representam 100% das vagas em 16 residências médicas
              e 50% dos aprovados em 48 residências.{" "}
              <span className="font-semibold">
                São +3000 aprovações e 217 primeiros lugares
              </span>{" "}
              – Do Norvte ao Sul do Brasil.
            </>
          }
          basis={580}
          title="Eles estavam passando por esses mesmos problemas e conseguiram ser aprovados. Acredite, você também pode!"
          className="mt-[156px] flex items-center justify-center px-[94px] max-lg:px-[64px]"
        >
          <Image
            className=""
            src="/images/main/trophy.png"
            width={200}
            height={200}
            alt="Picture of the author"
          />
        </SectionInformation>
        <SmallCarrosselImages />
        <CheckTheScheduleComponent />
        <SmallTextNotice className=" mt-7 flex justify-center  max-lg:px-6">
          Os módulos são disponibilizados semanalmente e você pode estudá-lo
          quantas vezes achar necessário
        </SmallTextNotice>
        <BeyondTheScheduleSection />
        <SectionInformation
          reverse={true}
          basis={580}
          paragraph=""
          title="Foi com esse método que a Dra. Mariana  acertou 88% da prova, conseguindo a maior nota geral na prova da USP-SP e o 1º Lugar em G.O."
          className=" mt-[156px] flex  items-center justify-center px-[94px]  max-lg:px-6 "
        >
          <Image
            className=" absolute bottom-[-16px]"
            src="/images/main/doctor.png"
            width={376}
            height={372}
            alt="Picture of the author"
          />
        </SectionInformation>
        <SectionPrices />
        <SmallTextNotice className="mt-10 flex justify-center max-lg:px-6">
          Aperte o botão acima e preencha seus dados corretamente para ter
          acesso. Se o pagamento for efetuado por cartão ou pix, o acesso ao
          curso é imediato. Só a emissão de boleto não garante a sua vaga.
        </SmallTextNotice>

        <SectionInformation
          light={
            <div className="light__blur absolute right-[-200px] top-0 z-0" />
          }
          basis={580}
          paragraph={
            <ul className="text-left">
              <li className="relative left-3.5 list-disc text-sm font-normal text-white">
                Bônus #01 | Curso de Radiologia (com imagens)
              </li>
              <li className="relative left-3.5 list-disc text-sm font-normal text-white">
                Bônus #02 | Curso de Dermatologia (com imagens).
              </li>
              <li className="relative left-3.5 list-disc text-sm font-normal text-white">
                Bônus #03 | Curso de Tomboelastograma.
              </li>
              <li className="relative left-3.5 list-disc text-sm font-normal text-white">
                Bônus #04 | Fichas resumo em PDF de todas as aulas.
              </li>
              <li className="relative left-3.5 list-disc text-sm font-normal text-white">
                Bônus #05 | Acesso a lives de revisão de +40 instituições
              </li>
              <li className="relative left-3.5 list-disc text-sm font-normal text-white">
                Bônus #06 | Fichas resumo e planner impresso para os 50
                primeiros inscritos
              </li>
            </ul>
          }
          title="Garantindo a sua participação no HIIT agora, vai receber de bôvnus gratuitos:"
          className="relative z-30 mt-28 flex  items-center justify-center px-[94px] max-lg:px-[64px]"
        >
          <Image
            className=" absolute bottom-[-15px] left-[-10px] select-none"
            src="/images/main/x-ray.png"
            width={400}
            height={264}
            alt="Picture of the author"
          />
        </SectionInformation>
        <ButtonMain />
        <GuaranteeSection />
        <SectionLargeCarrosselImages />
        <SectionUnderstandWhoWeAre />
      </Main>
    </div>
  );
}
