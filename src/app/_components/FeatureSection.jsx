export default function FeatureSection() {
  return (
      <section id="feature" className="py-14 px-[126px]">
        <h1 className="font-display text-[32px] leading-[40px] text-center text-white">Features of the project</h1>
        <div className="grid-cols-2 grid py-11 px-20 gap-[60px] mt-14 bg-ruby rounded-3xl" >
          <div id="first-col">
            <div className="">
              <h2 className="text-dark-kiss text-sm font-semibold">Key features</h2>
              <h1 className="text-white my-5 text-[32px] leading-[40px] font-bold">AI generated NFT</h1>
              <p className="text-white/[0.6] font-medium">Powerplay is where art meets technology in the creation of unique, AI-generated NFTs. Step into a world where creativity knows no bounds as our AI algorithms bring your imagination to life. Each NFT is a masterpiece, a digital fingerprint of your uniqueness in the metaverse.</p>
            </div>
          </div>
          <div id="second-col" className="flex flex-col gap-5">
            <div className="border-t border-b border-[#E504983D] p-5 flex flex-col gap-3 inner-purple-shadow rounded-xl">
              <h2 className="text-dark-kiss text-sm font-semibold">Game Fi</h2>
              <p className="text-white">GameFi is your ultimate destination for immersive Web3 gaming experiences. Dive into a world where blockchain technology transforms gaming into a decentralized playground of possibilities.</p>
            </div>
            <div className="border-t border-b border-[#E504983D] p-5 flex flex-col gap-3 inner-purple-shadow rounded-xl">
              <h2 className="text-dark-kiss text-sm font-semibold">De-Fi</h2>
              <p className="text-white">Defi is where assets can be put as collateral to get link tokens which can be utilized to play the game.</p>
            </div>
            <div className="border-t border-b border-[#E504983D] p-5 flex flex-col gap-3 inner-purple-shadow rounded-xl">
              <h2 className="text-dark-kiss text-sm font-semibold">Mini Art</h2>
              <p className="text-white">Put your assets to work as collateral to obtain LINK tokens, the gateway to unlocking premium gaming features.</p>
            </div>
          </div>
        </div>
      </section>
  )
}