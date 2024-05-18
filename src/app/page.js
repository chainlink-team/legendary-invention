import HeroSection from './_components/HeroSection'
import Navbar from './_components/Navbar'
import SponsorSection from './_components/SponsorSection'

export default function Home() {
  return (
    <main className="bg-[#070005]">
      <Navbar />
      <HeroSection />
      <SponsorSection />
      <section id="feature"></section>
      <section id="let'splay"></section>
      <footer id="footer"></footer>
    </main>
  )
}
