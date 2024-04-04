import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Invoquez le magicien
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
          Entrez dans le cercle de l&apos;enchantement et tissez vos mots dans le tissu du cosmos. Que vous cherchiez à susciter des collaborations, à percer des mystères ou simplement à partager des récits d&apos;aventures, vos messages sont des parchemins précieux dans ce royaume.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <p className="text-center font-white font-bold text-sm xs:text-base">
          07 86 77 99 21 
          </p>
          <p className="text-center font-white font-bold text-sm xs:text-base">
          quentin.gibouin@gmail.com
          </p>
        </div>
        
      </article>
    </>
  );
}
