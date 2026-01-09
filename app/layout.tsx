import type { Metadata } from "next";
import { Public_Sans, DM_Serif_Display } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  weight: ["300", "400", "500", "600", "700"]
});
const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "Miibo - Automation & Digital twin engineer",
  description: "Portfolio of Mohammad Bahrami (Miibo) - Automation & Digital twin engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${publicSans.variable} ${dmSerif.variable} ${publicSans.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
