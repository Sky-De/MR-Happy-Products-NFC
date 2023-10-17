import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

type GalleryType = {
  products: string[];
};
const Gallery = ({ products }: GalleryType) => {
  return (
    <section>
      <Carousel>
        {products?.map((product) => (
          <div key={product}>
            <img className="img" src={product} />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Gallery;
