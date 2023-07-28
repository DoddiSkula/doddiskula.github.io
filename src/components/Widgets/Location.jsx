import { Card } from "components/Card";
import { FiMap } from "react-icons/fi";

export const LocationWidget = () => {
  return (
    <a
      href={
        "https://www.google.com/maps/place/Reykjav%C3%ADk/@64.1334671,-21.9348416,12z/data=!3m1!4b1!4m6!3m5!1s0x48d674b9eedcedc3:0xec912ca230d26071!8m2!3d64.1469868!4d-21.9407552!16zL20vMDZmbGc?entry=ttu"
      }
      target={"_blank"}
      rel="noreferrer"
    >
      <Card>
        <div className="p-10 group flex gap-8 items-center justify-between">
          <div>
            <h3 className="transition-all font-medium text-gray-500 dark:text-neutral-500 text-xl mb-4">
              Based In
            </h3>
            <h2 className="transition-all font-semibold text-gray-800 dark:text-neutral-100 text-3xl whitespace-pre-wrap">
              Reykjavík, Iceland
            </h2>
          </div>
          <FiMap className="shrink-0 text-gray-300 dark:text-neutral-600 text-4xl group-hover:text-indigo-400 transition-all" />
        </div>
      </Card>
    </a>
  );
};
