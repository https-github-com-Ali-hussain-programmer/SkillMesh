import { Footer, Navbar, Message } from "@/Components";
import "./globals.css";
import type { Metadata } from "next";
import Provider from "@/utils/Provider";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen  ">
        <Provider>
          <Navbar />
          {children}
          <div className="fixed md:bottom-0 bottom-[2px] right-6 mx-auto z-50">
            <Message />
          </div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
