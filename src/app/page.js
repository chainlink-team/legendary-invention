import FeatureSection from './_components/FeatureSection'
import HeroSection from './_components/HeroSection'
import Navbar from './_components/Navbar'
import SponsorSection from './_components/SponsorSection'
import Footer from './_components/Footer'
import LetsPlaySection from './_components/LetsPlaySection'
import Image from 'next/image'
import MagicBorder from './_components/MagicBorder'
import FeatureGameSection from './_components/FeatureGameSection'

export default function Home() {
  return (
    <main className="bg-[#070005]">
      <Navbar />
      <HeroSection />
      <SponsorSection />
      <FeatureSection />
      <FeatureGameSection />
      <LetsPlaySection />
      <Footer />
    </main>
  )
}
