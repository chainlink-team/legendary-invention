"use client";

import { WagmiProvider, cookieToInitialState } from "wagmi";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { config } from "@/lib/config";
import { ConnectWalletProvider } from "@/lib/context/ConnectWalletContext";
import { ModalProvider } from "@/lib/context/ModalContext";

const queryClient = new QueryClient();

export default function Providers({ children, cookie }) {
  const initialState = cookieToInitialState(config, cookie);
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        <ConnectWalletProvider>
          <ModalProvider>
            <RainbowKitProvider
              theme={darkTheme({
                accentColor: "#0E76FD",
                accentColorForeground: "white",
                borderRadius: "large",
                fontStack: "system",
                overlayBlur: "small",
              })}
            >
              {children}
            </RainbowKitProvider>
          </ModalProvider>
        </ConnectWalletProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
