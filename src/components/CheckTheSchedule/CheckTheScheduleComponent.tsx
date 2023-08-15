export const CheckTheScheduleComponent = () => {
  return (
    <div className=" mt-36 flex justify-center bg-neutral-800 px-4">
      <div className="flex basis-[928px] flex-col items-center gap-6   py-14">
        <h1 className="   text-center text-2xl font-bold uppercase tracking-widest text-white">
          Esse é o cronograma que você vai seguir para alcançar uma taxa acima
          de 80% de acerto na prova.
        </h1>
        <p className="text-center text-sm font-normal text-white">
          Estude todas as áreas com professores especialistas e domine o
          conteúdo de forma simples e eficaz.
        </p>
        <button className="large__buttom__header h-12 w-96 rounded-lg bg-gradient-to-r from-purple-600 to-blue-400 text-sm font-semibold leading-normal text-white">
          TOQUE AQUI E CONFIRA O CRONOGRAMA
        </button>
      </div>
    </div>
  );
};
