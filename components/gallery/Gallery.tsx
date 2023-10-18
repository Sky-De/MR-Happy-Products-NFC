import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

type GalleryType = {
  products: string[] | { box?: string[]; light?: string[] };
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
