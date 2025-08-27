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
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      // Add these configurations
      afterSignInUrl="/dashboard"
      afterSignUpUrl="/dashboard"
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
    >
      <html lang="en">
        <body className={`${inter.className} min-h-screen flex flex-col`}>
          <Toaster />

          <div className="flex-grow">
            {children}
          </div>

          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
