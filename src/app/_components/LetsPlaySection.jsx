export default function LetsPlaySection() {
  return (
    <section id="let'splay" className="items-center flex flex-col px-36 bg-hotline">
      <div className="font-display flex text-white flex-col text-center items-center gap-4 my-[251px]">
        <h1 className="text-5xl">Let&apos;s play</h1>
        <h2 className="text-white">Join us in the realm of gaming where every click opens up a world of adventure <br /> and discovery. Le&apos;s Play isn&apos;t just a destination; it&apos;s a gateway to boundless <br /> entertainment</h2>
        <div className="flex gap-8">
          <div className="bg-gradient-to-r from-red-magic to-blue-magic hover:from-blue-magic hover:to-red-magic rounded-lg p-0.5 cursor-pointer">
            <div className="bg-[#070005] rounded-lg px-4 h-full flex items-center">
              Connect wallet
            </div>
          </div>
          <a className="text-white font-display rounded-lg py-4 px-6 magic-gradient hover:shadow-lg hover:shadow-red-magic transition-all" type="button" href="/game">Launch game</a>
        </div>
      </div>
    </section>
  )
}