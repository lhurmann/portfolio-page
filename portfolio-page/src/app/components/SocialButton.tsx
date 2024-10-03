import Image from "next/image";

interface SocialButtonProps {
  name: string;
  logo: string;
}

export default function SocialButton({ name, logo }: SocialButtonProps) {
  return (
    <div className="flex justify-center gap-3 rounded-full bg-zinc-800 px-4 py-2 text-zinc-200">
      <Image src={logo} width={40} height={40} alt={`${name} logo`} />
      <button className="text-textMd font-mavenPro">{name}</button>
    </div>
  );
}
