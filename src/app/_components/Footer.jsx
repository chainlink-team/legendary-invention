import Image from "next/image"

export default function Footer() {
  return (
      <footer id="footer">
        <div className="w-full h-0.5 magic-gradient"></div>
        <div className="flex w-full items-center justify-between py-[120px] px-8">
          <a href="/" className="logo">
            <Image src="/PowerPlay.png" alt="powerplay image"></Image>
          </a>
          <div className="font-display flex gap-12">
            <a className="text-hover-gradient" href="/">Home</a>
            <a className="text-hover-gradient" href="/game">Game</a>
            <a className="text-hover-gradient" href="/bank">Bank</a>
          </div>
          <a className="text-white font-display rounded-lg py-4 px-8 magic-gradient hover:shadow-lg hover:shadow-red-magic transition-all" type="button" href="/game">Launch game</a>
        </div>
      </footer>
  )
}