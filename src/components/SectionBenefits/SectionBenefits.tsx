import Image from "next/image";
export const SectionBenefits = () => {
  return (
    <div className="mt-36 flex justify-center">
      <div className="relative max-w-[1244px] flex-1  pl-32  max-lg:pl-0">
        <div className="border__bottom mt-4 pb-7 pl-[76px]">
          <p className="text-lg font-bold text-white">Revisão em 12 semanas</p>
          <p className="text-lg font-normal text-white">
            Estudo intensivo objetivo e eficaz.
          </p>
        </div>
        <div className=" border__bottom mt-4 pb-7 pl-[76px]">
          <p className=" text-lg font-bold text-white">
            Metodologia única no Brasil
          </p>
          <p className="  text-lg font-normal  text-white">
            Testada nas provas mais concorridas do país.
          </p>
        </div>
        <div className=" border__bottom mt-4 pb-8 pl-[76px]">
          <p className=" text-lg font-bold text-white">
            Professores especialistas
          </p>
          <p className="  text-lg font-normal text-white">
            Acompanhamento com profissionais da área.
          </p>
        </div>
        <div className="border__bottom mt-4 pb-8 pl-[76px]">
          <p className=" text-lg font-bold text-white">
            Garantia de satisfação
          </p>
          <p className="  text-lg font-normal text-white">
            Acesse o conteúdo sem risco durante 07 dias.
          </p>
        </div>
        <div className=" border__bottom mt-4 pb-7 pl-[76px]">
          <p className=" text-lg font-bold text-white">+3.000 aprovações</p>
          <p className="  text-lg font-normal text-white">
            Mais de 3 mil alunos aprovados.
          </p>
        </div>
        <div className="  mt-4 pb-7 pl-[76px]">
          <p className=" text-lg font-bold text-white">Plataforma digital</p>
          <p className="  text-lg font-normal text-white">
            Liberdade para estudar quando e onde quiser.
          </p>
        </div>
        <Image
          className="absolute right-[138px] top-[-40px] z-40 max-lg:hidden"
          src="/images/main/astronautback.png"
          width={420}
          height={700}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};
