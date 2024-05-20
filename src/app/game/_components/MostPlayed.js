import HeaderText from "@/components/HeaderText";
import Image from "next/image";
import Roullete from "@/images/games/roulette.png";

const MostPlayed = () => {
  return (
    <div className="my-10">
      <HeaderText
        header={"Most Played Games"}
        description="Most Player find themselves in these games"
      />

      <div className="grid mt-5 grid-cols-5 gap-5">
        {[0, 1, 2, 3, 4].map((num) => (
          <div key={num} className="w-full h-full">
            <Image
              src={Roullete}
              width={0}
              height={0}
              className="w-full rounded-lg h-full"
              alt="Roullete"
            />
            <span>Roullete</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostPlayed;
