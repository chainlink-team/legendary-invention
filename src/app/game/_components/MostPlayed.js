import HeaderText from "@/components/HeaderText";
import Image from "next/image";
import Roulette from "@/images/games/roulette.png";
import fortune from "@/images/games/fortune-tiger.png";
import goo from "@/images/games/gates-of-olympus.png";
import poker from "@/images/games/poker.png";

const MostPlayed = () => {
  const games = [
    { name: "Roulette", img: Roulette },
    { name: "Fortune Tiger", img: fortune },
    { name: "Poker", img: poker },
    { name: "Gates of Olympus", img: goo },
    { name: "Roulette", img: Roulette },
  ];
  return (
    <div className="my-10">
      <HeaderText
        header="Most Played Games"
        description="Most Player find themselves in these games"
      />

      <div className="grid mt-5 grid-cols-5 gap-5">
        {[0, 1, 2, 3, 4].map((num) => (
          <div key={num} className="w-full h-full">
            <Image
              src={games[num].img}
              width={0}
              height={0}
              className="w-full rounded-lg h-full"
              alt="Roulette"
            />
            <span>{games[num].name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostPlayed;
