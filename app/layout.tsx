import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Mo. Zuhair — Java Developer",
  description: "Java developer portfolio for Mo. Zuhair: Spring Boot, REST APIs, MySQL, microservices.",
  openGraph: {
    title: "Mo. Zuhair — Java Developer",
    description: "Spring Boot, REST APIs, MySQL, microservices.",
    url: "https://example.com",
    siteName: "Mo. Zuhair",
    type: "website"
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gradient-to-b from-white via-zinc-50 to-white dark:from-zinc-950 dark:via-zinc-950 dark:to-black text-zinc-900 dark:text-zinc-100`}>
        {children}
      </body>
    </html>
  );
}

