import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nexus",
  description: "Real Estate CRM Software",
};

export default function RouteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
     {children}
    </main>
  );
}
