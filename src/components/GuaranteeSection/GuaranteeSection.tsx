import Image from "next/image";
export const GuaranteeSection = () => {
  return (
    <div className="relative z-30 mt-32 flex justify-center bg-neutral-800 px-6">
      <div className="flex max-w-[1066px] items-center gap-14 py-4 max-lg:flex-col-reverse max-lg:gap-8 max-lg:py-9  ">
        <div className="  flex-1">
          <h1 className="text-xl font-semibold text-white max-lg:text-center">
            <p>
              E se você está na dúvida sobre esse investimento, não se preocupe!
            </p>
            Nós te damos uma{" "}
            <span className="linear__text__color">garantia de satisfação</span>.
          </h1>
          <p className="mt-4 text-sm font-normal text-white max-lg:text-center">
            Com essa Garantia de 07 Dias você terá acesso completo aos materiais
            que são disponibilizados na primeira semana. Além disso, também terá
            acesso ao nosso QBank – Banco com +6 mil questões autorais (caso
            seja contratado). E mesmo assim, se você achar que o Intensivo
            MedCof não é a solução ideal ou não é o momento certo para ter um
            protocolo simples e eficaz de aprovação,
            <span className="text-sm font-bold text-white">
              {" "}
              poderá pedir todo o seu dinheiro de volta.
            </span>
          </p>
        </div>
        <Image
          className="aspect-square max-lg:w-[128px]"
          width={259}
          height={265}
          src="/images/main/guarantee.png"
          alt="guarantee image"
        />
      </div>
    </div>
  );
};
