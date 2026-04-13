import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});



export const metadata: Metadata = {
  metadataBase: new URL("https://jydanse.com"),
  title: {
    default: "J'y Danse — Club de danse sportive à Gilly",
    template: "%s | J'y Danse",
  },
  description:
    "Club de danse sportive à Gilly (Charleroi). Cours de danses de salon, latino, line dance, rock & swing. Affilié à la Ligue de la Danse. Ambiance conviviale depuis 1992.",
  keywords: [
    "danse", "cours de danse", "Gilly", "Charleroi", "danse de salon",
    "salsa", "bachata", "line dance", "rock", "swing", "club de danse",
  ],
  openGraph: {
    type: "website",
    locale: "fr_BE",
    siteName: "J'y Danse",
    title: "J'y Danse — Club de danse sportive à Gilly",
    description:
      "Club de danse sportive à Gilly (Charleroi). Cours de danses de salon, latino, line dance, rock & swing. Ambiance conviviale depuis 1992.",
  },
  twitter: {
    card: "summary_large_image",
    title: "J'y Danse — Club de danse sportive à Gilly",
    description:
      "Club de danse sportive à Gilly (Charleroi). Cours de danses de salon, latino, line dance, rock & swing.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
