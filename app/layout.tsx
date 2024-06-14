import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000/"),

  title: "Marius Chitaru | Personal Portfolio",
  authors: {
    name: "Marius Chitaru",
  },

  description:
    "I am a highly experienced software developer with over 18 years in the industry, proficient in multiple programming languages and development environments. With a proven track record in full-stack development, software architecture, and leading development teams to success, I also have significant experience in agile methodologies and project management.",
  openGraph: {
    title: "Marius Chitaru | Personal Portfolio",
    description:
      "I am a highly experienced software developer with over 18 years in the industry, proficient in multiple programming languages and development environments. With a proven track record in full-stack development, software architecture, and leading development teams to success, I also have significant experience in agile methodologies and project management.",
    url: "http://localhost:3000",
    siteName: "Marius Chitaru | Personal Portfolio",
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
