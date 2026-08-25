"use client";

import { useState } from "react";

const carMakes = [
  "Toyota",
  "Honda",
  "Ford",
  "Chevrolet",
  "BMW",
  "Mercedes-Benz",
  "Nissan",
  "Hyundai",
  "Volkswagen",
  "Kia",
  "Mazda"
];

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 25 }, (_, i) => (currentYear - i).toString());

const services = [
  "Oil Change",
  "Brake Repair",
  "Transmission Service",
  "Suspension and Steering Repair",
  "Engine Diagnostics",
  "Battery Replacement",
  "AC Service",
  "Tire Rotation and Alignment",
  "Exhaust & Emission Repair",
  "Electrical System Service",
  "General Maintenance"
];

export default function EstimateRepairCost() {
  const [make, setMake] = useState("");
  const [year, setYear] = useState("");
  const [service, setService] = useState("");
  const [serviceSuggestions, setServiceSuggestions] = useState<string[]>(services);
  const [serviceFocused, setServiceFocused] = useState(false);

  const handleServiceInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setService(value);
    setServiceSuggestions(
      services.filter((s) => s.toLowerCase().includes(value.toLowerCase()))
    );
  };

  const handleServiceSuggestionClick = (suggestion: string) => {
    setService(suggestion);
    setServiceSuggestions(services);
    setServiceFocused(false);
  };

  return (
    <section className="bg-orange noise-bg py-16 lg:py-20 px-5 lg:px-16">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="font-heading uppercase font-bold text-4xl sm:text-5xl leading-tight text-dark">
          Estimate Your Repair Cost
        </h2>
        <p className="text-gray-900 mt-6 leading-relaxed max-w-xl mx-auto font-medium">
          Get a quick, transparent estimate for your automotive repair. Let us know your vehicle details and issue, and we’ll get back to you with an accurate quote.
        </p>
      </div>
      {/* Make the form wider on large screens */}
      <form className="max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto bg-white rounded-2xl shadow p-8 grid gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold mb-2 text-dark" htmlFor="make">
              Car Make
            </label>
            <select
              id="make"
              name="make"
              value={make}
              onChange={(e) => setMake(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-orange"
              required
            >
              <option value="" disabled>
                Select Car Make
              </option>
              {carMakes.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-2 text-dark" htmlFor="year">
              Year
            </label>
            <select
              id="year"
              name="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-orange"
              required
            >
              <option value="" disabled>
                Select Year
              </option>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="relative">
          <label className="block font-semibold mb-2 text-dark" htmlFor="service">
            Needed Service
          </label>
          <input
            id="service"
            name="service"
            type="text"
            placeholder="e.g. Suspension and Steering Repair"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-orange"
            value={service}
            onChange={handleServiceInput}
            onFocus={() => setServiceFocused(true)}
            onBlur={() => setTimeout(() => setServiceFocused(false), 120)}
            autoComplete="off"
            required
          />
          {serviceFocused && service && serviceSuggestions.length > 0 && (
            <ul className="absolute z-20 w-full bg-white border border-gray-200 rounded shadow mt-1 max-h-44 overflow-auto">
              {serviceSuggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  onMouseDown={() => handleServiceSuggestionClick(suggestion)}
                  className="px-4 py-2 cursor-pointer hover:bg-orange/20 transition-colors text-dark"
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold mb-2 text-dark" htmlFor="fullname">
              Full Name
            </label>
            <input
              id="fullname"
              name="fullname"
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-orange"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-2 text-dark" htmlFor="phone">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Your Phone"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-orange"
              required
            />
          </div>
        </div>
        <div>
          <label className="block font-semibold mb-2 text-dark" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-orange"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-2 text-dark" htmlFor="message">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us about the issue..."
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-orange"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-orange text-white font-bold uppercase rounded px-8 py-3 hover:bg-dark transition-colors"
        >
          Get Estimate
        </button>
      </form>
 
    </section>
  );
}