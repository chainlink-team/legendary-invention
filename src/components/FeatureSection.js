'use client'
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";

function Icosahedron({ radius = 3, detail = 0, speed = 0.7, ...props }) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (meshRef.current.rotation.x += delta * speed));
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={meshRef}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <icosahedronGeometry args={[radius, detail]} />
      <meshPhysicalMaterial
        color={hovered ? "hotpink" : "hotpink"}
        reflectivity={0.8}
        iridescence={0.427}
      />
    </mesh>
  );
}

export default function FeatureSection() {
  return (
    <section id="feature" className="py-14 px-[126px] relative">
      <Canvas style={{ position: 'absolute', width: 'min(550px, 65%)', bottom: 60, height: 300, zIndex: 1 }}>
        <ambientLight intensity={Math.PI / 5} />
        <spotLight
          position={[-7, 0, 12]}
          angle={0.35}
          penumbra={1}
          decay={0}
          intensity={1.2}
        />
        <camera aspect={16 / 10} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Icosahedron
          position={[-1.5, -1, -1]}
          rotation={[0, 3, 3.2]}
          radius={4}
        />
        <Icosahedron
          position={[2, -1.5, 2]}
          rotation={[0, -3.2, 3]}
          scale={0.5}
          speed={1.2}
        />
      </Canvas>
      <h1 className="font-display text-[32px] leading-[40px] text-center text-white">Features of the project</h1>
      <div className="grid-cols-2 grid py-11 px-20 gap-[60px] mt-14 bg-ruby rounded-3xl z-10 relative" >
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