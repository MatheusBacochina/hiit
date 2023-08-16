import Image from "next/image";
export const SectionUnderstandWhoWeAre = () => {
  return (
    <div className="mt-52 flex justify-center ">
      <div className="flex basis-[1290px] max-lg:justify-center  max-lg:px-6 ">
        <div className="flex-1  max-lg:hidden">
          <Image
            className="linear__bg__bottom h-full w-full   object-contain  "
            src="/images/main/people.png"
            width={633}
            height={670}
            alt="Picture of the author"
          />
        </div>
        <div className="flex-0 basis-[598px] ">
          <h1 className=" text-3xl font-bold uppercase tracking-widest text-white max-lg:text-center">
            Entenda quem somos nós e o porquê de sermos a melhor solução para a
            sua aprovação nessa reta final:
          </h1>
          <p className="mt-10 text-lg font-normal text-white max-lg:text-center">
            Nós somos o Grupo MedCof, uma empresa que surgiu há pouco mais de 4
            anos e mudou completamente a realidade da preparação para
            residências médicas no Brasil.
          </p>
          <p className="mt-10 text-lg font-normal text-white max-lg:text-center">
            Nós somos o Grupo MedCof, uma empresa que surgiu há pouco mais de 4
            anos e mudou completamente a realidade da preparação para
            residências médicas no Brasil.{" "}
          </p>
          <p className="mt-10 text-lg font-normal text-white max-lg:text-center">
            Uma vez aplicada aqui no Brasil, os alunos da MedCof foram capazes
            de alcançar uma alta porcentagem de acertos. Gerando assim,
            colocações e resultados nunca vistos antes por nenhum curso
            preparatório.
          </p>
          <div className="mt-12 flex flex-1 justify-center ">
            <button className=" large__buttom__header rounded-lg bg-gradient-to-r from-purple-600 to-blue-400 px-7 py-3 text-sm font-semibold leading-normal text-white">
              QUERO MINHA APROVAÇÃO COM AJUDA DE VOCÊS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
