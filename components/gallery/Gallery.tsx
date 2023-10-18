import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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
    <section>
      <Carousel>
        {products &&
          products?.map((product) => (
            <div key={product._id}>
              <img className="img" src={product.url} />
            </div>
          ))}
      </Carousel>
    </section>
  );
};

export default Gallery;
