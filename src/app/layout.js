import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "800"] });

export const metadata = {
  title: "zenith.",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn(
            "relative flex flex-col items-center min-h-screen text-white bg-blue-200",
            poppins.className
          )}
        >
          <Navbar />
          <main className="flex-1 w-full h-full p-4">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
