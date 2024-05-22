"use client"
import { useEffect, useRef } from "react";
import {
  useConnectModal,
  useAccountModal,
  useChainModal,
} from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect } from "wagmi";
import "@rainbow-me/rainbowkit/styles.css";


export default function ConnectWalletButton() {

  const { isConnecting, address, isConnected, chain } = useAccount();
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  const { openChainModal } = useChainModal();
  const { disconnect } = useDisconnect();

  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return (
    <div className="bg-gradient-to-r from-red-magic to-blue-magic hover-gradient-shadow rounded-xl p-0.5 cursor-pointer">
      {!isConnected ? (
        <div className="bg-[#070005] rounded-xl py-3 px-6 h-full flex items-center"
          onClick={async () => {
            // Disconnecting wallet first because sometimes when is connected but the user is not connected
            if (isConnected) {
              disconnect();
            }
            openConnectModal?.();
          }}
          disabled={isConnecting}
        >
          {isConnecting ? 'Connecting...' : 'Connect wallet'}
        </div>
      ) : (
        <div className="bg-[#070005] rounded-xl py-3 px-6 h-full flex items-center" onClick={async () => openAccountModal?.()}>
          {address}
        </div>
      )}
    </div>
  )
}