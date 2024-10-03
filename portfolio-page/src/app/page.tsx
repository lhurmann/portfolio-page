import Image from "next/image";
import SocialButton from "./components/SocialButton";
import { ChevronDown, ChevronsDown } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-background">
      <div className="flex h-full w-full flex-col items-center bg-mainBackground bg-cover bg-fixed px-40 pt-20">
        <div className="relative">
          <Image
            className="rounded-full border-4 border-red p-2"
            src="/me-page.jpg"
            width={200}
            height={200}
            alt={""}
          />
          <Image
            src="/teste.svg"
            width={60}
            height={60}
            alt={""}
            className="absolute bottom-1 right-0"
          />
        </div>

        <div className="mt-14 flex max-w-4xl flex-col items-center text-center">
          <p className="font-inconsolata text-subtitle text-zinc-300">
            Hello World! Meu nome é{" "}
            <strong className="text-red">Lucas S. Hurmann</strong> e sou
          </p>
          <h1 className="font-asap text-titleLg font-semibold text-zinc-100">
            Desenvolvedor Front-End
          </h1>
          <p className="mt-3 font-mavenPro text-textSm font-normal text-zinc-400">
            Sou um profissional com sólida experiência em suporte técnico,
            sempre movido por uma paixão inerente pela tecnologia. Nos últimos
            anos, descobri um interesse profundo por programação, o que me levou
            a me dedicar ao estudo dessa área. Agora, estou em uma jornada para
            me tornar um desenvolvedor de excelência, sempre buscando aprimorar
            minhas habilidades para criar grandes projetos e deixar minha marca
            neles.
          </p>
        </div>

        <div className="mt-20 flex flex-row gap-4">
          <SocialButton logo="/GitHub.svg" name="GitHub" />
          <SocialButton logo="/HTML.svg" name="HTML" />
          <SocialButton logo="/CSS.svg" name="CSS" />
          <SocialButton logo="/JavaScript.svg" name="JavaScript" />
          <SocialButton logo="/React.svg" name="React" />
          <SocialButton logo="/Node.js.svg" name="Node.js" />
        </div>

        <ChevronsDown className="mt-16" color="gray" size={40} />
      </div>
    </div>
  );
}
