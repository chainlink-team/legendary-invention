import Image from "next/image"

export default function SponsorSection() {
  return (
    <section id="sponsor" className="bg-white text-black py-6 pt-8">
      <h1 className="text-[32px] leading-[40px] text-center font-display">Sponsors</h1>
      <div id="sponsors-icon" className="flex flex-row px-16 justify-between w-full items-center my-16">
        <Image src="/logos/chainlink-logo.png" alt="chainlink logo"></Image>
        <Image src="/logos/avalanche-logo.png" alt="avalanche logo"></Image>
        <Image src="/logos/tree-logo.png" alt="tree logo"></Image>
        <Image src="/logos/scroll-logo.png" alt="scroll logo"></Image>
        <Image src="/logos/polygon-logo.png" alt="polygon logo"></Image>
        <Image src="/logos/logo-1.png" alt="some logo"></Image>
        <Image src="/logos/sun-logo.png" alt="sun logo"></Image>
      </div>
    </section>
  )
}