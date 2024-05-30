"use client";
import Image from "next/image";
import LaunchGameButton from "./LaunchGameButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const navLinks = [
    {
      name: "Home",
      path: "/",
      classes: "text-hover-gradient-home",
    },
    {
      name: "Game",
      path: "/game",
      classes: "text-hover-gradient-game",
    },
    {
      name: "Bank",
      path: "/bank",
      classes: "text-hover-gradient-bank",
    },
  ];

  return (
    <nav className="bg-[#070005] fixed w-full z-20">
      <div className="flex w-full items-center justify-between py-6 px-8">
        <a href="/" className="logo">
          <Image
            src="/PowerPlay.png"
            alt="powerplay image"
            width={172}
            height={15}
          ></Image>
        </a>
        <div className="font-display flex gap-12">
          {navLinks.map(({ name, path, classes }, index) => (
            <Link
              className={`${classes} ${
                path === pathname ? "before:opacity-0" : ""
              }`}
              key={index}
              href={path}
            >
              {name}
            </Link>
          ))}
        </div>
        <LaunchGameButton />
      </div>
      <div className="w-full h-0.5 magic-gradient"></div>
    </nav>
  );
}
