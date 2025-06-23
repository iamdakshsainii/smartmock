import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/Footer";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "SmartMock",
  description: "AI Mock Interview Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} min-h-screen flex flex-col`}>
          {/* The Toaster component is likely for toast notifications */}
          <Toaster />

          {/* Page content goes here */}
          <div className="flex-grow">
            {children}
          </div>

          {/* Footer will always be at the bottom */}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
