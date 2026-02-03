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
  title: "Mohammad Bahrami (Miibo) - Digital Twin & Simulation Engineer | Portfolio",
  description: "Mohammad Bahrami (Miibo) - Digital Twin & Simulation Engineer specializing in ROS 2, AGV/AMR systems, and intralogistics automation. Explore my projects, experience, and expertise in robotics and simulation.",
  keywords: ["Mohammad Bahrami", "Miibo", "Digital Twin Engineer", "Simulation Engineer", "ROS 2", "AGV", "AMR", "Robotics", "Automation Engineer", "Intralogistics", "Robot Simulation", "Portfolio"],
  authors: [{ name: "Mohammad Bahrami" }],
  creator: "Mohammad Bahrami",
  publisher: "Mohammad Bahrami",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://miibo-dev.github.io",
    siteName: "Mohammad Bahrami Portfolio",
    title: "Mohammad Bahrami (Miibo) - Digital Twin & Simulation Engineer",
    description: "Digital Twin & Simulation Engineer specializing in ROS 2, AGV/AMR systems, and intralogistics automation.",
    images: [
      {
        url: "/og-image.png", // You can add this image later
        width: 1200,
        height: 630,
        alt: "Mohammad Bahrami - Digital Twin & Simulation Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Bahrami (Miibo) - Digital Twin & Simulation Engineer",
    description: "Digital Twin & Simulation Engineer specializing in ROS 2, AGV/AMR systems, and intralogistics automation.",
    images: ["/og-image.png"], // You can add this image later
  },
  metadataBase: new URL("https://miibo-dev.github.io"),
  alternates: {
    canonical: "https://miibo-dev.github.io",
  },
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
        <meta name="google-site-verification" content="wmxkzdoO9qIMniXJj1FTKEcONNmXDOdl0pyiU-3P2T4" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "name": "Mohammad Bahrami",
                  "alternateName": "Miibo",
                  "jobTitle": "Digital Twin & Simulation Engineer",
                  "description": "Digital Twin & Simulation Engineer specializing in ROS 2, AGV/AMR systems, and intralogistics automation",
                  "url": "https://miibo-dev.github.io",
                  "knowsAbout": ["ROS 2", "Digital Twin", "Simulation", "AGV", "AMR", "Robotics", "Automation", "Intralogistics"],
                },
                {
                  "@type": "WebSite",
                  "name": "Mohammad Bahrami Portfolio",
                  "alternateName": "Miibo Portfolio",
                  "url": "https://miibo-dev.github.io",
                  "description": "Portfolio showcasing projects and experience in digital twin engineering, simulation, and robotics automation",
                  "author": {
                    "@type": "Person",
                    "name": "Mohammad Bahrami"
                  }
                }
              ]
            })
          }}
        />
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
