"use client";
import { ProductType } from "@/components/gallery/Gallery";
import { useEffect, useState } from "react";

type GetProductHookProps = {
  type: "box" | "light";
};

export const useGetPost = ({ type }: GetProductHookProps) => {
  const [results, setResults] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getProducts = async () => {
    setIsLoading(true);

    try {
      if (type === "box") {
        const res = await fetch("api/products/box", {
          method: "GET",
        });
        if (res.ok) {
          const data = await res.json();
          setResults(data);
        }
      }
      if (type === "light") {
        const res = await fetch("api/products/ligth", {
          method: "GET",
        });
        if (res.ok) {
          const data = await res.json();
          setResults(data);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [type]);

  return { isLoading, results };
};
