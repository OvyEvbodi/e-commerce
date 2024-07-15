'use client'
import type { Metadata } from "next";
import { El_Messiri } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { Provider } from "react-redux";
import { store, persistor } from "@/redux/store";
import { PersistGate } from 'redux-persist/integration/react';

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
        <PersistGate loading={null} persistor={persistor}>
          <body className={ElMessiri.className}>
            <Nav />
            {children}
            <Footer />
          </body>
        </PersistGate>
      </Provider>
    </html>
  );
}
