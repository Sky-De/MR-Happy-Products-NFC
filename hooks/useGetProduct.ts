"use client";
import { useEffect, useState } from "react";

type GetProductHookProps = {
  type: "allProducts" | "box" | "light";
};

export const useGetPost = ({ type }: GetProductHookProps) => {
  const [results, setResults] = useState<
    { box?: string[]; light?: string[] } | string[]
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getProducts = async () => {
    setIsLoading(true);

    try {
      if (type === "allProducts") {
        const res = await fetch("api/products", {
          method: "GET",
        });
        if (res.ok) {
          const data = await res.json();
          setResults(data);
        }
      }
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
