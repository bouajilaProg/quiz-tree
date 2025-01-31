import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/commun/NavBar";
import Footer from "@/components/commun/Footer";
import UserProvider from "./contexts/userProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tree Quiz",
  description: "A quiz app for everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={"antialiased bg-gray-900 min-h-screen"}
      >

        <UserProvider>
          <NavBar />
          <div className="bg-white">
            {children}
          </div>
          <Footer />
        </UserProvider>


      </body>
    </html>
  );
}
