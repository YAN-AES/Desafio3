//* Components imports
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
import { ProductCard } from "@/components/Card";

//* Types imports
import type { Product } from "@/schemas/product";

type CarouselDemoProps = {
  products: Product[];
}

export function CarouselDemo(props: CarouselDemoProps) {
  return (
    <Carousel className="relative flex items-center justify-center w-full max-w-[1400px]">
      <CarouselContent>
        {
          props.products.map((_, index) => {
            const key = `product-${index}`;
            return (
              <CarouselItem
                key={key}
                className="flex justify-center basis-full sm:basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <ProductCard
                  product={{
                    id: key,
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    image: "https://via.placeholder.com/500",
                    name: "Product Name",
                    price: 100,
                    stock: 10,
                    discount: 0,
                  }}
                />
              </CarouselItem>
            );
          })
        }
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}

      <div className="absolute top-0 left-0 w-2 h-full pointer-events-none md:w-16 via-white bg-gradient-to-l from-transparent to-white" />
      <div className="absolute bottom-0 right-0 w-2 h-full pointer-events-none md:w-16 bg-gradient-to-r via-white from-transparent to-white" />
    </Carousel>
  )
}