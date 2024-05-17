export default function Navbar() {
  return (
    <nav className="bg-[#070005] fixed w-full">
      <div className="flex w-full items-center justify-between py-6 px-8">
        <a href="/" className="logo">
          <img src="/PowerPlay.png"></img>
        </a>
        <div className="font-display flex gap-12">
          <a className="text-hover-gradient" href="/">Home</a>
          <a className="text-hover-gradient" href="/game">Game</a>
          <a className="text-hover-gradient" href="/bank">Bank</a>
        </div>
        <a className="text-white font-display rounded-lg py-4 px-8 magic-gradient hover:shadow-lg hover:shadow-red-magic transition-all" type="button" href="/game">Launch game</a>
      </div>
      <div className="w-full h-0.5 magic-gradient"></div>
    </nav>
  )
}