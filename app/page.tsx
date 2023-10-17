"use client";
import Gallery from "@/components/gallery/Gallery";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isBox, setIsBox] = useState<boolean>(true);
  const products1 = [
    "https://picsum.photos/id/1/200/302",
    "https://picsum.photos/id/1/200/303",
    "https://picsum.photos/id/1/200/303",
  ];
  const products2 = [
    "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
    "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
    "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
  ];
  return (
    <main className="main border border-red-700">
      <div className="main__tabs flex justify-evenly py-4">
        {" "}
        <h2
          onClick={() => setIsBox(true)}
          className={`${isBox ? "font-bold" : ""} cursor-pointer select-none`}
        >
          Box
        </h2>
        <h2
          onClick={() => setIsBox(false)}
          className={`${!isBox ? "font-bold" : ""} cursor-pointer select-none`}
        >
          Light
        </h2>
      </div>
      <Gallery products={isBox ? products1 : products2} />
    </main>
  );
}
