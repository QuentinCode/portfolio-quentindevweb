import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "@/components/RenderModel";
// import HatModel from "@/components/models/HatModel";
import AboutDetails from "@/components/about";
import Form from "@/components/Form";
import Formpermonth from "@/components/Formpermonth";


import dynamic from "next/dynamic";


const HatModel = dynamic(() => import("@/components/models/HatModel"), {
  ssr: false,
});

export const metadata = {
  title: "About",
};

export default function Home() {
  
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10">
        <RenderModel>
          <HatModel />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold max-xs:text-[2.5rem] text-5xl xs:text-6xl sm:text-7x1 lg:text-8xl text-accent">
            Quentindevweb
          </h1>
          <p className="font-light text-foreground text-lg">
            Rencontrez le magicien à l&apos;origine de ce Portfolio
          </p>
        </div>
      </div>

      <AboutDetails />
      <Form />
      <Formpermonth />
      
          <p className="mt-8 font-light text-foreground ">
            *Ce calculateur de tarif donne un aperçu du montant pour chaque projet cependant chaque projet à ses spécificités et je vous recommande donc de prendre rendez-vous pour avoir plus de détails sur le prix que peut coûter votre propre projet !
          </p>
        
 
    </>
  );
}
