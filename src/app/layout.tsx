import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "../components/Provider";
import { Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, session }: any) {
  console.log("this is in the session variable", session);
  return (
    <html lang="en">
      <body>
        <Provider session={session}>
          <Navbar />
          <div>{children}</div>
        </Provider>
      </body>
    </html>
  );
}
