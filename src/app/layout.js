import "@/styles/globals.css";
import Providers from "./providers";
import { headers } from "next/headers";
import AiModal from "@/components/AiModal";
import { ModalProvider } from "@/lib/context/ModalContext";
import { ConnectWalletProvider } from "@/lib/context/ConnectWalletContext";

export const metadata = {
  title: "Powerplay",
  description: "Web3 gaming arena",
};

export default function RootLayout({ children }) {
  const cookie = headers().get("cookie");

  return (
    <html lang="en">
      <body>
        <Providers cookie={cookie}>
          <AiModal />
          {children}
        </Providers>
      </body>
    </html>
  );
}
