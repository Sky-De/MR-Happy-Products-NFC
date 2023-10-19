"use client";
import Gallery from "@/components/gallery/Gallery";
import { useGetPost } from "@/hooks/useGetProduct";
import { useState } from "react";
import HeroSvg from "../public/hero.svg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="main h-full flex">
      <section className="my-auto ">
        <Image className="w-[80%] mx-auto" src={HeroSvg} alt="hero" />
        <div className="content px-3">
          <h2 className="text-3xl font-bold title">
            Mr. Happy's Enchanting Wonders Emporium
          </h2>
          <p className="py-2 text-gray-500">
            Mr. Happy's Enchanting Wonders Emporium is your gateway to a world
            of joy and magic. Explore mesmerizing tricks, delightful gifts,
            captivating lights, toys, and more. Transform moments with surprise
            and enchantment. Choose from our curated collection and share the
            joy of gifting from our emporium.
          </p>
        </div>
      </section>
    </main>
  );
}
