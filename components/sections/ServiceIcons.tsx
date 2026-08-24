import { Fan, Disc, CircleDot, Gauge, Flame } from "lucide-react";

const items = [
  { icon: Fan, label: "Motor Mount" },
  { icon: Disc, label: "Brake Repair" },
  { icon: CircleDot, label: "Wheel Repair" },
  { icon: Gauge, label: "Car Inspection" },
  { icon: Flame, label: "Radiator Repair" },
];

export default function ServiceIcons() {
  return (
    <div className="relative z-10 -mt-16 lg:-mt-20 px-5 lg:px-16">
      <div className="bg-gray-light rounded-xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 shadow-xl">
        {items.map((item, i) => (
          <div
            key={item.label}
            className={`flex flex-col items-center justify-center gap-4 py-10 px-4 ${
              i !== items.length - 1 ? "sm:border-r border-black/10" : ""
            } ${i < 3 ? "border-b sm:border-b-0 border-black/10" : ""}`}
          >
            <item.icon size={36} strokeWidth={1.5} className="text-dark" />
            <span className="font-heading uppercase text-sm tracking-wide text-dark text-center">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
