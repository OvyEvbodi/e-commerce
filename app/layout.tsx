'use client'
import type { Metadata } from "next";
import { El_Messiri } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
// import StoreProvider from "./StoreProvider";

const ElMessiri = El_Messiri({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Helendo",
//   description: "Furniture",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body className={ElMessiri.className}>
          <Nav />
          {children}
          <Footer />
        </body>
      </Provider>
    </html>
  );
}
