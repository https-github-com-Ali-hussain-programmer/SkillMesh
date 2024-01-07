import { Client, Message } from "@/Components";
import ChakraProviderUI from "../utils/ChakraProviderUI";
import ReduxProvider from "../redux/reduxProvider/ReduxProvider";
import "./globals.css";
import { Roboto } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { Metadata } from "next";
import LoaderHandler from "../utils/LoaderHandler";
import FormProvider from "@/context/Form";
export const metadata: Metadata = {
  title: "SkillMesh | Web3 FreeLancing ",
  description: "This is Home page for SkillMesh",
};
const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen ${roboto.className} `}>
        <ReduxProvider>
          <ChakraProviderUI>
            <FormProvider>
              <ToastContainer position="bottom-left" />
              <LoaderHandler>
                <Client>{children}</Client>
                <div className="fixed bottom-0  right-0 mx-auto z-50">
                  <Message />
                </div>
              </LoaderHandler>
            </FormProvider>
          </ChakraProviderUI>
        </ReduxProvider>
      </body>
    </html>
  );
}
