import type { Metadata } from "next";
import "./globals.css";
import ToastUI from "@/components/ui/ToastUI";

export const metadata: Metadata = {
  title: "Nexus",
  description: "Real Estate CRM Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <ToastUI />
      </body>
    </html>
  );
}
