import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ParticlesBackground from "./ParticlesBackground";
import { Providers } from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mo. Zuhair — Java Developer",
  description: "Java developer portfolio for Mo. Zuhair: Spring Boot, REST APIs, MySQL, microservices.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-gradient-to-b 
          from-white via-zinc-50 to-white 
          dark:from-zinc-950 dark:via-zinc-950 dark:to-black 
          text-zinc-900 dark:text-zinc-100 
          transition-colors duration-500 ease-in-out`}
      >
        <Providers>
          <ParticlesBackground />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
