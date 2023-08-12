import Image from "next/image";

export const ContextInformation = () => {
  return (
    <section className="flex items-center justify-center px-[94px] py-[74px] max-lg:px-[64px] ">
      <div className="shrink-1 flex  h-auto flex-1 grow-0 basis-[1092px] items-center  justify-start gap-8 rounded-[100px] bg-[url('/images/main/retanglebg.png')] bg-cover bg-center bg-no-repeat px-7 py-3 max-lg:px-10 max-lg:py-7 ">
        <div className=" shrink-1 flex h-[200px] grow-0 basis-96 flex-row items-center justify-center rounded-[100px]  bg-gradient-to-r  from-purple-600 to-blue-400 max-lg:hidden ">
          <Image
            className="rotate-[-15deg]"
            src="/images/main/estetoscopio.png"
            width={350}
            height={350}
            alt="Picture of the author"
          />
        </div>
        <div className="flex h-full w-full flex-1 flex-col gap-2">
          <h2 className="h-auto text-[21px] font-bold leading-6 text-white">
            Entenda como o Intensivo MedCof vai te ajudar a ser aprovado mesmo
            com as dificuldades do dia a dia.
          </h2>

          <p className="h-auto text-sm font-normal text-white">
            Criamos um Programa de 04 Pilares para você superar os problemas da
            falta de tempo e alcançar a tão sonhada aprovação.
          </p>
        </div>
      </div>
    </section>
  );
};
