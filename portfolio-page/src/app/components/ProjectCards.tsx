import Image from "next/image";

interface ProjectCardsProps {
  projectPhoto: string;
  projectTitle: string;
  projectDesc: string;
}

export default function ProjectCard({
  projectPhoto,
  projectTitle,
  projectDesc,
}: ProjectCardsProps) {
  return (
    <div className="h-full w-full rounded-xl bg-zinc-800 p-6">
      <Image
        src={projectPhoto}
        width={500}
        height={200}
        alt={""}
        className=""
      />
      <div className="mt-5">
        <h5 className="text-titleSm font-asap font-medium text-zinc-100">
          {projectTitle}
        </h5>
        <p className="mt-2 text-wrap font-mavenPro text-textSm font-normal text-zinc-400">
          {projectDesc}
        </p>
      </div>
    </div>
  );
}
