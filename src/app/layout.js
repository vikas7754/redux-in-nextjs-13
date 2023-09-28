import ReduxProvider from "@/components/ReduxProvider";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Redux in Next.js 13",
  description: "A demo of Redux in Next.js 13",
};

export default function RootLayout({ children }) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ReduxProvider>
  );
}
