import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://localhost:3000/"),

	title: "AyeshaSiddiqua",
	authors: {
		name: "AyeshaSiddiqua",
	},

	description:
		"Based in India, I'm a passionate Fullstack Developer. I love to build web applications.    ",
	openGraph: {
		title: "AyeshaSiddiqua",
		description:
			"Based in India, I'm a passionate Fullstack Developer. I love to build web applications.      ",
		url: "https://localhost:3000/",
		siteName: "AyeshaSiddiqua",
		images: "/og.png",
		type: "website",
	},
	keywords: ["AyeshaSiddiqua", "porfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
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
