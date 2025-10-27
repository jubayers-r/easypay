import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanistSans = Urbanist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Easy Pay",
  description: "Created by Jubayer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanistSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
