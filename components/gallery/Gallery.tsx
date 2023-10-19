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
  isLoading: boolean;
};
const Gallery = ({ products, isLoading }: GalleryType) => {
  if (products.length < 1 && !isLoading)
    return <h2>There is no product yet</h2>;

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
