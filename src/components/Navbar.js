import Image from "next/image"
import LaunchGameButton from "./LaunchGameButton"

export default function Navbar() {
  return (
    <nav className="bg-[#070005] fixed w-full z-20">
      <div className="flex w-full items-center justify-between py-6 px-8">
        <a href="/" className="logo">
          <Image src="/PowerPlay.png" alt="powerplay image" width={172} height={15}></Image>
        </a>
        <div className="font-display flex gap-12">
          <a className="text-hover-gradient" href="/">Home</a>
          <a className="text-hover-gradient" href="/game">Game</a>
          <a className="text-hover-gradient" href="/bank">Bank</a>
        </div>
        <LaunchGameButton />
      </div>
      <div className="w-full h-0.5 magic-gradient"></div>
    </nav>
  )
}