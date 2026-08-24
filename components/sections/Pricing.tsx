import { Check, X, ArrowUpRight } from "lucide-react";

const plans = [
  {
    name: "Basic Pack",
    price: "$25.00",
    dark: false,
    features: [
      { label: "Email Notification", included: true },
      { label: "On Demand Delivery", included: true },
      { label: "Easy Return Management", included: true },
      { label: "Send Mail Pdf Report", included: false },
      { label: "Lifetime Support", included: false },
    ],
  },
  {
    name: "Advance Pack",
    price: "$32.00",
    dark: true,
    features: [
      { label: "Email Notification", included: true },
      { label: "On Demand Delivery", included: true },
      { label: "Easy Return Management", included: true },
      { label: "Send Mail Pdf Report", included: true },
      { label: "Lifetime Support", included: false },
    ],
  },
  {
    name: "Premium Pack",
    price: "$48.00",
    dark: false,
    features: [
      { label: "Email Notification", included: true },
      { label: "On Demand Delivery", included: true },
      { label: "Easy Return Management", included: true },
      { label: "Send Mail Pdf Report", included: true },
      { label: "Lifetime Support", included: true },
    ],
  },
];

export default function Pricing() {
  return (
    <section className="px-5 lg:px-16 py-20 lg:py-28 text-center">
      <span className="inline-flex items-center gap-2 font-heading uppercase text-sm tracking-widest text-dark">
        <span className="bg-yellow rounded-full w-5 h-5 inline-flex items-center justify-center text-[10px]">P</span>
        ricing Plan
      </span>
      <h2 className="mt-4 font-heading uppercase font-bold text-4xl sm:text-5xl leading-tight">
        Competitive Repair <br /> Pricing Plan
      </h2>

      <div className="mt-16 grid lg:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`border rounded-2xl p-4 ${plan.dark ? "border-transparent" : "border-black/10"}`}
          >
            <div
              className={`rounded-xl px-8 py-12 ${
                plan.dark ? "bg-dark text-white" : "bg-gray-light text-dark"
              }`}
            >
              <p className={`${plan.dark ? "text-gray-300" : "text-gray-500"}`}>Every Repair</p>
              <p className="font-heading font-bold text-5xl my-4">{plan.price}</p>
              <span
                className={`inline-block font-heading uppercase text-sm tracking-wide px-6 py-3 skew-btn ${
                  plan.dark ? "bg-orange text-white" : "bg-orange text-white"
                }`}
              >
                {plan.name}
              </span>

              <div className={`mt-8 pt-6 border-t ${plan.dark ? "border-white/10" : "border-black/10"} flex flex-col gap-4 text-left`}>
                {plan.features.map((f) => (
                  <div key={f.label} className="flex items-center gap-3">
                    {f.included ? (
                      <Check size={16} className="text-orange shrink-0" />
                    ) : (
                      <X size={16} className={`shrink-0 ${plan.dark ? "text-gray-500" : "text-gray-400"}`} />
                    )}
                    <span className={`${!f.included ? (plan.dark ? "text-gray-500" : "text-gray-400") : ""}`}>
                      {f.label}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className={`mt-10 w-full font-heading uppercase tracking-wide px-6 py-4 flex items-center justify-center gap-2 skew-btn transition-colors ${
                  plan.dark
                    ? "bg-yellow text-dark hover:bg-yellow/90"
                    : "bg-orange text-white hover:bg-orange-2"
                }`}
              >
                Buy Package <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
