import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{maxWidth:"1080px", margin:"0 auto"}}>
        {children}
      </body>
    </html>
  );
}
