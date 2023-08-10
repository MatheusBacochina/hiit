import Image from "next/image";
export default function Links() {
  return (
    <>
      <Image
        src="/images/header/LargeIcon.svg"
        width={93}
        height={71}
        alt="Picture of the author"
      />
      <ul className="flex flex-row gap-10">
        <li>
          <a
            className="align-middle text-sm font-normal leading-[25px] text-white"
            href=""
          >
            PILARES
          </a>
        </li>
        <li>
          <a
            className="align-middle text-sm font-normal leading-[25px] text-white"
            href=""
          >
            APROVADOS
          </a>
        </li>
        <li>
          <a
            className="align-middle text-sm font-normal leading-[25px] text-white"
            href=""
          >
            CRONOGRAMA
          </a>
        </li>
        <li>
          <a
            className="align-middle text-sm font-normal leading-[25px] text-white"
            href=""
          >
            PREÇO
          </a>
        </li>
        <li>
          <a
            className="align-middle text-sm font-normal leading-[25px] text-white"
            href=""
          >
            GARANTIA
          </a>
        </li>
        <li>
          <a
            className="align-middle text-sm font-normal leading-[25px] text-white"
            href=""
          >
            F.A.Q
          </a>
        </li>
      </ul>
      <div className=" flex h-full flex-1 items-center justify-end">
        <div className="relative h-[51px] w-[154px]">
          <div className="absolute flex h-full w-full items-center justify-center">
            <h6 className="text-sm font-semibold  leading-[25px]">
              ME INSCREVER
            </h6>
          </div>
          <button className=" button__nav relative h-[51px]  w-[154px]"></button>
        </div>
      </div>
    </>
  );
}
