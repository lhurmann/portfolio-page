import Image from "next/image";
import SocialButton from "./components/SocialButton";
import {
  ChevronDown,
  ChevronsDown,
  Infinity,
  LampDesk,
  MonitorSmartphone,
  Server,
} from "lucide-react";
import ProjectCard from "./components/ProjectCards";
import ServiceCards from "./components/ServiceCards";

export default function Home() {
  return (
    <>
      <div className="flex h-full w-full flex-col items-center bg-mainBackground bg-cover pt-20">
        <div className="relative">
          <Image
            className="rounded-full border-4 border-red p-2"
            src="/me-page.jpg"
            width={200}
            height={200}
            alt={""}
          />
          <Image
            src="/code.svg"
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

      <div className="flex h-full w-full flex-col items-center bg-background pt-40">
        <div className="flex flex-col items-center">
          <strong className="font-inconsolata text-subtitle text-red">
            Meu trabalho
          </strong>
          <h3 className="text-titleMd font-asap font-semibold text-zinc-100">
            Veja os projetos em destaque
          </h3>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-6 px-52">
          <ProjectCard
            projectPhoto="/cardImage1.png"
            projectTitle="Título do projeto"
            projectDesc="Projeto focado em..."
          />
          <ProjectCard
            projectPhoto="/cardImage2.png"
            projectTitle="Título do projeto"
            projectDesc="Projeto focado em..."
          />
          <ProjectCard
            projectPhoto="/cardImage3.png"
            projectTitle="Título do projeto"
            projectDesc="Projeto focado em..."
          />
          <ProjectCard
            projectPhoto="/cardImage4.png"
            projectTitle="Título do projeto"
            projectDesc="Projeto focado em..."
          />
          <ProjectCard
            projectPhoto="/cardImage5.png"
            projectTitle="Título do projeto"
            projectDesc="Projeto focado em..."
          />
          <ProjectCard
            projectPhoto="/cardImage6.png"
            projectTitle="Título do projeto"
            projectDesc="Projeto focado em..."
          />
        </div>
      </div>
      <div className="h-full w-full bg-background pt-40">
        <div className="flex flex-col items-center">
          <strong className="font-inconsolata text-subtitle text-red">
            Meus serviços
          </strong>
          <h3 className="text-titleMd font-asap font-semibold text-zinc-100">
            Como posso ajudar o seu negócio
          </h3>
        </div>

        <div className="mt-20 flex justify-around gap-6 px-52">
          <ServiceCards
            serviceIcon={MonitorSmartphone}
            serviceColor="#3996DB"
            serviceTitle="Websites e Aplicativos"
            serviceDesc="Desenvolvimento de interfaces"
          />
          <ServiceCards
            serviceIcon={Server}
            serviceColor="#EABD5F"
            serviceTitle="API e banco de dados"
            serviceDesc="Criação de serviços do sistema"
          />
          <ServiceCards
            serviceIcon={Infinity}
            serviceColor="#82BC4F"
            serviceTitle="DevOps"
            serviceDesc="Gestão e infraestrutura da aplicação"
          />
        </div>
      </div>
      {/* <div className="bg-lastBackground h-full w-full bg-cover">
        <div className="flex flex-col items-center">
          <strong className="font-inconsolata text-subtitle text-purple">
            Contato
          </strong>
          <h3 className="text-titleMd font-asap font-semibold text-zinc-100">
            Gostou do meu trabalho?
          </h3>
          <p className="text-wrap font-mavenPro text-textSm font-normal text-zinc-400">
            Entre em contato ou acompanhe as minhas redes sociais!
          </p>
        </div>
        <div></div>
      </div> */}
    </>
  );
}
