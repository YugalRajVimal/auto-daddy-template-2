"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 1800);
    const remove = setTimeout(() => setVisible(false), 2300);
    return () => {
      clearTimeout(timer);
      clearTimeout(remove);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[999] flex flex-col items-center justify-center bg-dark transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative w-full max-w-md  overflow-hidden flex items-center justify-center">
        <img
          src="/carloader.svg"
          alt="Loading Car"
          className="w-80 object-contain"
          draggable={false}
        />
      </div>
      <p className=" text-white font-heading tracking-[0.3em] text-sm animate-pulse">
        LOADING
      </p>
    </div>
  );
}
