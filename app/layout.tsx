import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "AlgoRiders",
  description: "Hackathon-driven engineering team building intelligent systems."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-primary">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
