export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen items-center flex flex-col pt-36 px-36">
      <div className="font-display flex text-white flex-col text-center items-center gap-4">
        <h1 className="text-5xl">Enter the Web3 Gaming <br /> Arena: <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-magic to-blue-magic">PowerPlay</span></h1>
        <h2 className="text-[#B3B3B3]">Dive into the next generation of gaming with PowerPlay – where every move is<br /> powered by blockchain technology. Discover new games, connect with friends, and <br /> unlock endless possibilities.</h2>
        <div className="flex gap-8">
          <div className="bg-gradient-to-r from-red-magic to-blue-magic hover:from-blue-magic hover:to-red-magic rounded-lg p-0.5 cursor-pointer">
            <div className="bg-[#070005] rounded-lg px-4 h-full flex items-center">
              Connect wallet
            </div>
          </div>
          <a className="text-white font-display rounded-lg py-4 px-6 magic-gradient hover:shadow-lg hover:shadow-red-magic transition-all" type="button" href="/game">Launch game</a>
        </div>
      </div>
      <img src="/HeroImage.png"></img>
    </section>
  )
}