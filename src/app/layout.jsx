'use client';
import { Geist, Geist_Mono } from "next/font/google";
import Header from "../common/Navigation/header";
import Footer from "../common/Navigation/footer";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Provider } from "react-redux";
import { store } from "@/store/store";
import WriteAboutUs from "@/components/Home/WriteAboutUs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Provider store={store}>
          <div className="flex flex-col min-h-screen">
            <SpeedInsights />
            <Header />
            <main className="flex-grow">{children}</main>
            <WriteAboutUs />
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}