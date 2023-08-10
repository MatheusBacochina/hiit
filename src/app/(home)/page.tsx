import { Nav, Header, Items, Section, StepsContainer } from "@/components";

export default function HomePage({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col items-center h-screen bg-black overflow-y-scroll overflow-x-hidden bg-center">
      <Header className="flex flex-shrink-0 flex-col auto text-gray-800 py-12  w-full min-h-screen  relative bg-[url('/images/header/headerbg.png')]  bg-cover bg-center bg-no-repeat bg__header">
        <Nav className="flex w-full  px-20 justify-center"></Nav>
        <Section className="flex flex-row max-xl:flex-wrap  2xl:my-24 my-16 px-28 max-xl:px-12 max-md:px-11 gap-[70px] max-xl:gap-[30px] justify-center items-center ">
          <Items></Items>
        </Section>
      </Header>
      <StepsContainer className="w-full h-auto"></StepsContainer>
    </main>
  );
}
