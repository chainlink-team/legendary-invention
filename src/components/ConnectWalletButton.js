"use client";
import { useEffect } from "react";
import { useConnectWallet } from "@/lib/context/ConnectWalletContext";

export default function ConnectWalletButton() {
  const {
    isConnected,
    isConnecting,
    isMounted,
    address,
    chain,
    openAccountModal,
    openConnectModal,
    openChainModal,
    disconnect,
  } = useConnectWallet();

  useEffect(() => {
    isMounted.current = true;
  }, [isMounted]);

  return (
    <div className="bg-gradient-to-r from-red-magic to-blue-magic hover-gradient-shadow rounded-xl p-0.5 cursor-pointer">
      {!isConnected ? (
        <div
          className="bg-[#070005] rounded-xl py-3 px-6 h-full flex items-center"
          onClick={async () => {
            // Disconnecting wallet first because sometimes when is connected but the user is not connected
            if (isConnected) {
              disconnect();
            }
            openConnectModal?.();
          }}
          disabled={isConnecting}
        >
          {isConnecting ? "Connecting..." : "Connect wallet"}
        </div>
      ) : (
        <div
          className="bg-[#070005] rounded-xl py-3 px-6 h-full flex items-center"
          onClick={async () => openAccountModal?.()}
        >
          {`${address.substring(0, 8)}......${address.slice(-6)}`}
        </div>
      )}
    </div>
  );
}
