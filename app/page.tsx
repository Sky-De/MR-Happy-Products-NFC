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
        <Image
          loading="eager"
          className="w-[80%] mx-auto"
          src={HeroSvg}
          alt="hero"
        />
        <div className="content px-4">
          <h2 className="text-4xl font-bold title text-center">
            <span className="text-4xl font-bold title text-[#FFC727] ">
              Mr. Happy
            </span>
            's Enchanting Wonders Emporium
          </h2>
          <p className="py-4 text-gray-500 text-center">
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
