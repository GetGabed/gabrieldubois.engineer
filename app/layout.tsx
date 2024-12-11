import type { Metadata } from "next";
import "./globals.css";
import { Background } from "../components/ui/Background";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Gabriel Dubois",
  description: "Gabriel Dubois - Software Engineer at Montreal, Canada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased overflow-y-scroll`}>
        <div className="relative w-full h-full league">
          <Background />
          <div className="max-w-xl w-full mx-auto absolute left-1/2 transform -translate-x-1/2 z-10 md:text-md ">
            <div className="mt-8" id="navbar">
              <Navbar />
            </div>
            {children}
            <div className="mt-4" id="footer">
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
