import { Geist, Geist_Mono } from "next/font/google";
import Home from "./page";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{maxWidth:"1080px", margin:"0 auto"}}>
        <Home />
      </body>
    </html>
  );
}
