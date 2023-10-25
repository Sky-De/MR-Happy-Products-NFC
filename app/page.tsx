"use client";
import Gallery from "@/components/gallery/Gallery";
import { useGetPost } from "@/hooks/useGetProduct";
import { useState } from "react";
import HeroSvg from "../public/hero.svg";
import Image from "next/image";
import MrHappyLogo from "../public/mr.svg";

export default function Home() {
  return (
    <main className="main h-full flex">
      <section className="my-auto ">
        <Image
          loading="eager"
          className="w-[70%] md:w-[50%] max-w-[400px] mx-auto heroImage"
          src={HeroSvg}
          alt="hero"
        />
        <div className="content px-4 flex flex-col justify-center items-center">
          <Image
            loading="eager"
            src={MrHappyLogo}
            alt="logo"
            width={200}
            className="heroName"
          />
          <p className="description py-4 text-gray-500 text-center ">
            فروشگاه شگفتی‌های جادویی مستر هپی دروازه‌ای به دنیای شادی و جادو
            برای شما باز می‌کند. در اینجا، ترفندهای جذاب، هدایا شگفت‌انگیز، فندک
            های جذاب اسباب بازی و موارد دیگر را کاوش کنید. لحظات خود را با تعجب
            و جادو تغییر دهید. از مجموعه گزینه‌های انتخابی ما را انتخاب کنید و
            شادی هدیه دادن از فروشگاه ما را به اشتراک بگذارید
          </p>
        </div>
      </section>
    </main>
  );
}
