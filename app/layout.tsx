import type { Metadata } from "next";
import { Edu_NSW_ACT_Foundation } from "next/font/google";
import "./globals.css";

const EduInter = Edu_NSW_ACT_Foundation({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${EduInter.className} antialiased bg-[#121212] text-white/50 p-12`}
      >
        <div className="w-full h-full border-2 border-solid border-white/50 rounded-3xl pb-10">
          <div className="w-full flex items-center justify-start border-b-2 border-solid border-white/50 xl:px-40 lg:px-24 px-10">
            <h1 className="my-4 text-xl">MigradoLibre</h1>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
