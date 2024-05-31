import Image from "next/image"
import LaunchGameButton from "./LaunchGameButton"
import { useAccount } from "wagmi";


export default function Navbar() {

  // const { address, isConnected, chain } = useAccount()


  return (
    <nav className="bg-[#070005] fixed w-full z-20">
      <div className="flex w-full items-center justify-between py-6 px-8">
        <a href="/" className="logo">
          <Image src="/PowerPlay.png" alt="powerplay image" width={172} height={15}></Image>
        </a>
        <div className="font-display flex gap-12">
          <a className="text-hover-gradient-home" href="/">Home</a>
          <a className="text-hover-gradient-game" href="/game">Game</a>
          <a className="text-hover-gradient-bank" href="/bank">Bank</a>
        </div>
        {/* {isConnected && chain ? '' : <LaunchGameButton />} */}
        <LaunchGameButton />
      </div>
      <div className="w-full h-0.5 magic-gradient"></div>
    </nav>
  )
}