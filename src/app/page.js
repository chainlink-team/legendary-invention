import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-[#070005]">
      <nav className="bg-[#070005]">
        <div className="flex w-full items-center justify-between py-6 px-8">
          <div className="logo">
            <img src="/PowerPlay.png"></img>
          </div>
          <div className="font-display text-white flex gap-4">
            <a href="/">Home</a>
            <a href="/game">Game</a>
            <a href="/bank">Bank</a>
          </div>
          <a className="text-white font-display rounded-lg px-4 py-4" type="button" href="/game" style={{ background: 'linear-gradient(90deg, #F1324D 0%, #2414E3 100%)', boxShadow: '6px 6px 56px 0px rgba(200, 44, 107, 1)' }}>Launch game</a>
        </div>
        <div className="w-full h-0.5" style={{ background: 'linear-gradient(90deg, #F1324D 0%, #2414E3 100%)' }}></div>
      </nav>
    </main>
  )
}
