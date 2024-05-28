import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000/"),

  title: "DevCats Software Development",
  authors: {
    name: "chensokheng",
  },

  description:
    "Welcome to Devcats, the alternative software development partner. Subscribe monthly, or pay a one time fee. No need to hire in house, just hire us. Think of us as your development partners, taking you from idea to launch.",
  openGraph: {
    title: "DevCats Software Development",
    description:
      "Welcome to Devcats, the alternative software development partner. Subscribe monthly, or pay a one time fee. No need to hire in house, just hire us. Think of us as your development partners, taking you from idea to launch.",
    url: "http://localhost:3000",
    siteName: "DevCats Software Development",
    images: "/Site.png",
    type: "website",
  },
  keywords: [
    "software development",
    "web development",
    "mobile app development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
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
