"use client";
import Gallery, { ProductType } from "@/components/gallery/Gallery";
import React, { useEffect, useState } from "react";

type pageProps = {
  params: { product: string };
};

const product = ({ params }: pageProps) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`api/products/${params.product}`, {
          method: "GET",
        });
        if (res.ok) {
          const data = await res.json();
          setProducts(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getProducts();
  }, [params.product]);

  if (isLoading) return <h4>Loading...</h4>;

  return <Gallery products={products} />;
};

export default product;
