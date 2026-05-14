import type { Metadata } from "next";
import { Playfair_Display, Lato, Dancing_Script } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["italic", "normal"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cioccolato - Chocolate Artesanal Italiano",
  description: "Chocolate artesanal italiano. Do cacau à sua mão. Uma experiência única de sabor e tradição.",
  keywords: ["chocolate", "artesanal", "italiano", "cioccolato", "cacau", "premium"],
  authors: [{ name: "Cioccolato" }],
  icons: {
    icon: "https://res.cloudinary.com/dwfbqgtfr/image/upload/f_auto,q_auto/v1774042313/WhatsApp_Image_2026-03-20_at_17.46.57-removebg-preview_fjhauf.png",
  },
  openGraph: {
    title: "Cioccolato - Chocolate Artesanal Italiano",
    description: "Chocolate que conta uma história. Artesanal. Italiano. Irresistível.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${lato.variable} ${dancing.variable} antialiased cursor-crosshair`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
