import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

export type ProductType = {
  _id: string;
  url: string;
  createdAt: string;
  updatedAt: string;
};

type GalleryType = {
  products: ProductType[];
};
const Gallery = ({ products }: GalleryType) => {
  console.log(products);

  return (
    <section className=" h-full z-0 pt-2 flex justify-center">
      <Carousel>
        {products &&
          products?.map((product) => (
            <div key={product._id}>
              <img loading="lazy" alt="product" src={product.url} />
            </div>
          ))}
      </Carousel>
    </section>
  );
};

export default Gallery;
