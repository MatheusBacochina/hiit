import { ReactNode } from "react";

export const SectionInformation = ({
  className = "",
  title = "",
  paragraph = "",
  basis = 0,
  reverse = false,
  children,
}: {
  className?: string;
  title?: string;
  paragraph?: ReactNode;
  basis?: number;
  children?: ReactNode;
  reverse?: boolean;
}) => {
  return (
    <section className={className}>
      <div
        className={`  shrink-1 max-mg:px-10 flex  h-auto   flex-1 grow-0 basis-[1092px] rounded-full ${
          reverse && "flex-row-reverse"
        }  items-center justify-start gap-8  bg-[url('/images/main/retanglebg.png')]  bg-cover bg-center bg-no-repeat px-8 py-4 max-lg:justify-center max-lg:rounded max-lg:py-7`}
      >
        <div className=" shrink-1  relative flex h-[200px] grow-0 basis-96 flex-row items-center justify-center rounded-[100px] bg-gradient-to-r from-purple-600  to-blue-400  max-lg:hidden ">
          {children}
        </div>
        <div
          style={{ flexBasis: `${basis}px` }}
          className={` flex h-full  flex-1 grow-0 flex-col gap-2   `}
        >
          <h2
            className={`h-auto text-[21px] max-lg:text-center ${
              reverse && "text-end"
            }  font-bold leading-6 text-white`}
          >
            {title}
          </h2>
          <div className="h-auto text-sm font-normal text-white max-lg:text-center">
            {paragraph}
          </div>
        </div>
      </div>
    </section>
  );
};
