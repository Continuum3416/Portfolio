import localFont from "next/font/local";
import AOSInitializer from "./AOSInitializer";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Donle",
  description: "My portfolio website made with next",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add AOS CSS */}
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <link rel='icon' href='/icons/favicon.png' type="image/png"/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <AOSInitializer />
        {children}
      </body>
    </html>
  );
}