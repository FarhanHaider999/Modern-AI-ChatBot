import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/styles/globals.css';
import { cn } from "@/lib/utils";
import { Providers } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Chatbot",
  description: "Created By Farhan Haider",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen antialiased")}>
        <Providers>
          <main className="h-screen dark text-foreground bg-background">{children}</main>
        </Providers>
      </body>
    </html>
  );
}



