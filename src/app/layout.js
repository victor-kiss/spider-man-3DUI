import "./globals.css";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "600"] });

export const metadata = {
  title: "Spider-Man  UI ShowCase",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main>{children}</main>
        <footer className="bg-neutral-900 p-4">
          <span className="block text-gray-300 text-center"> 2024</span>
          <span className="block text-gray-300 text-center">
            Developed by{" "}
            <Link
              href="https://devssik.com.br/"
              rel="noreferrer"
              target="_blank"
              className="font-bold"
            >
              dev-ssik
            </Link>
          </span>
        </footer>
      </body>
    </html>
  );
}
