import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fixton | Best Car Engineering Company",
  description: "Because they are not vehicles they are a emotions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-[#14151f]">
        {children}
      </body>
    </html>
  );
}
