import FeatureSection from './_components/FeatureSection'
import HeroSection from './_components/HeroSection'
import Navbar from './_components/Navbar'
import SponsorSection from './_components/SponsorSection'
import Footer from './_components/Footer'
import LetsPlaySection from './_components/LetsPlaySection'

export default function Home() {
  return (
    <main className="bg-[#070005]">
      <Navbar />
      <HeroSection />
      <SponsorSection />
      <FeatureSection />
      <LetsPlaySection />
      <Footer />
    </main>
  )
}
