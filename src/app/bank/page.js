import { GradientBorderButton } from "@/components/GradientBorderButton";
import Navbar from "../_components/Navbar";
import HeaderText from "@/components/HeaderText";
import Container from "./Components/Container";
import Image from "next/image";
import avax from "../../../public/images/Avax.png";
import polygon from "../../../public/images/Polygon.png";
export default function Page() {
  return (
    <>
      <Navbar />
      <div className="pt-32 bg-sharp-black text-white px-14">
        <HeaderText
          header={"The Bank"}
          description={
            "Hey champ! hit the bank and get your asserts to play a game."
          }
        />
        <div className="w-full justify-end font-display flex py-5">
          <div className="flex items-center px-3 flex-col border-r">
            <h5 className="text-sm">TOTAL LINKS</h5>
            <span className="text-xl text-sharp-purple">203,746</span>
          </div>
          <div className="flex items-center px-3 flex-col">
            <h5 className="text-sm">1 LINKS = $15.53</h5>
            <span className="text-xl text-sharp-purple">APY 0.03%</span>
          </div>
          <GradientBorderButton>Lend</GradientBorderButton>
        </div>
        <div className="w-full h-0.5 magic-gradient"></div>
        <Container heading={"Borrow"}>
          <div className="flex w-full justify-between my-4">
            <div className="magic-gradient p-0.5 rounded-md">
              <div className="bg-[#13020E] font-sans flex gap-6 px-4 py-6 rounded-md">
                <div className="flex  flex-col gap-3">
                  <h5 className="text-xl font-sans">CURRENT</h5>
                  <span className="flex items-center mb-5 gap-1">
                    <Image src={polygon} width={35} height={35} alt="polygon" />
                    <p className="font-medium text-3xl">0</p>
                    <p className="text-sm font-sans opacity-50 flex self-end">
                      (Mumbia Testnet)
                    </p>
                  </span>
                  <div>
                    <div className="w-fit p-0.5 rounded-md magic-gradient">
                      <input
                        type="text"
                        className="bg-[#090107] w-[250px] focus:outline-none p-1 rounded-md"
                      />
                    </div>
                    <p className="text-sm">Max borrowable: 0.12334345353535</p>
                  </div>
                </div>
                <div className="flex flex-col justify-end gap-4">
                  <GradientBorderButton>Reply</GradientBorderButton>
                  <button className="w-[120px] magic-gradient rounded-sm py-1 font-display">
                    Borrow
                  </button>
                </div>
              </div>
            </div>
            <div className="magic-gradient p-0.5 rounded-md">
              <div className="bg-[#13020E] font-sans flex gap-3 px-4 py-6 rounded-md">
                <div className="flex  flex-col gap-3">
                  <h5 className="text-xl font-sans">CURRENT</h5>
                  <span className="flex items-center mb-5 gap-1">
                    <Image src={avax} width={35} height={35} alt="polygon" />
                    <p className="font-medium text-3xl">0</p>
                    <p className="text-sm font-sans opacity-50 flex self-end">
                      (Fuji Testnet)
                    </p>
                  </span>
                  <div>
                    <div className="w-fit p-0.5 rounded-md magic-gradient">
                      <input
                        type="text"
                        className="bg-[#090107] w-[250px] focus:outline-none p-1 rounded-md"
                      />
                    </div>
                    <p className="text-sm">Max borrowable: 0.12334345353535</p>
                  </div>
                </div>
                <div className="flex flex-col justify-end gap-4">
                  <GradientBorderButton>Reply</GradientBorderButton>
                  <button className="w-[120px] magic-gradient rounded-sm py-1 font-display">
                    Borrow
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
