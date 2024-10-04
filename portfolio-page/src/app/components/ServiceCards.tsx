import { LucideProps, MonitorSmartphone } from "lucide-react";

interface ServiceCardsProps {
  serviceDesc: string;
  serviceTitle: string;
  serviceIcon: React.ComponentType<LucideProps>;
  serviceColor: string;
}

export default function ServiceCards({
  serviceDesc,
  serviceTitle,
  serviceIcon: ServiceIcon,
  serviceColor,
}: ServiceCardsProps) {
  return (
    <div className="flex w-full flex-col rounded-xl border-4 border-zinc-800 p-4">
      <ServiceIcon color={serviceColor} size={100} />{" "}
      <div className="mt-10">
        <h5 className="text-titleSm font-asap font-medium text-zinc-100">
          {serviceTitle}
        </h5>
        <p className="text-wrap font-mavenPro text-textSm font-normal text-zinc-400">
          {serviceDesc}
        </p>
      </div>
    </div>
  );
}
