import { Header } from "@/components/Header";
import { ContainerInformation } from "@/components/ContainerInformation";
import { InformationSectionHeader } from "@/components/InformationSectionHeader";
import { Nav } from "@/components/Nav";
import { Main } from "@/components/Main";
import { SectionSteps } from "@/components/SectionSteps";
import { SectionHeader } from "@/components/SectionHeader";
import { MethodWasCreateSection } from "@/components/MethodWasCreateSection";
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
      <Main className="h-auto w-full">
        <ContainerInformation className="flex items-center justify-center px-[94px] py-[74px] max-lg:px-[64px]" />
        <SectionSteps />
        <MethodWasCreateSection />
        <ContainerInformation className="mt-36 flex items-center justify-center px-[94px] max-lg:px-[64px]" />
      </Main>
    </div>
  );
}
