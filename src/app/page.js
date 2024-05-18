import HeroSection from './_components/HeroSection'
import Navbar from './_components/Navbar'
import SponsorSection from './_components/SponsorSection'

export default function Home() {
  return (
    <main className="bg-[#070005]">
      <Navbar />
      <HeroSection />
      <SponsorSection />
      <section id="feature" className="py-14 px-[126px]">
        <h1 className="font-display text-[32px] leading-[40px] text-center text-white">Features of the project</h1>
        <div className="grid-cols-2 grid" style={{ background: 'radial-gradient(104.56% 104.56% at 50% 52.81%, rgba(0, 0, 0, 0) 0%, rgba(229, 4, 152, 0.2) 100%)' }}>
          <div id="first-col">
            <div>
              <h2>Key features</h2>
              <h1>AI generated NFT</h1>
              <p>Powerplay is where art meets technology in the creation of unique, AI-generated NFTs. Step into a world where creativity knows no bounds as our AI algorithms bring your imagination to life. Each NFT is a masterpiece, a digital fingerprint of your uniqueness in the metaverse.</p>
            </div>
          </div>
          <div id="second-col"></div>
        </div>
      </section>
      <section id="let'splay"></section>
      <footer id="footer"></footer>
    </main>
  )
}
