import "./globals.css";
import { Livvic } from "next/font/google";

const livvic = Livvic({
  subsets: ["latin"],
  // style: ["normal", "italic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
  display: "swap",
  variable: "livvic",
});

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SkipToMainContent from "@/components/layout/SkipToMainContent";

export const metadata = {
  title: "Frontend Mentor | myteam website challenge - Homepage",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const mainContentId = "main-content";

  return (
    <html lang="en">
      <body
        className={`${livvic.className} bg-primary-midnight-green flex flex-col h-screen`}
      >
        <SkipToMainContent targetId={mainContentId} />

        <Header />

        <main id={mainContentId} className="flex-1 outline-none" tabIndex={-1}>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
