// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from './components/header'
import Footer from './components/footer'
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: `${meta_title}`,
//   description: `${meta_description}`,
//   keywords: `${meta_keywords}`,
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
