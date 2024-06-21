import Dining from "@/assets/dining.jpg";
import Living from "@/assets/living.jpg";
import Bedroom from "@/assets/bedroom.jpg";
import Furniturebg from "@/assets/furniturebg.jpg";
import Homebg from "@/assets/homebg.jpg";
import { CTA } from "@/components/CTA";
import { CarouselDemo } from "./_components/carousel";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/Card";

//* Hooks imports
import { useProducts } from "@/hooks/queries/use-products";

export function Home() {
  const products = useProducts();

  return (
    <main>
      <section className="flex w-full ">
        <div className="relative flex items-center justify-end w-full min-h-svh md:pr-14">
          <img
            src={Homebg}
            alt=""
            className="absolute hidden md:flex top-0 left-0 z-0 object-cover w-full h-full"
          />
          <CTA />
        </div>
      </section>
      <section className="flex flex-col py-14 gap-14">
        <div className="flex flex-col items-center justify-center font-poppins p-3">
          <p className="text-4xl font-bold">Browse The Range</p>
          <p className="text-xl font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex flex-col gap-8 xl:flex-row items-center justify-between text-2xl font-semibold font-poppins px-36">
          <div className="flex flex-col items-center justify-center gap-8">
            <img
              src={Dining}
              alt="Dining room"
              className="shadow-xl rounded-xl"
            />
            <p>Dining</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-8">
            <img
              src={Living}
              alt="Living room"
              className="shadow-xl rounded-xl"
            />
            <p>Living</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-8">
            <img src={Bedroom} alt="Bedroom" className="shadow-xl rounded-xl" />
            <p>Bedroom</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-10 items-center justify-center">
        <span className="font-poppins font-bold text-4xl">Our Products</span>
        <div className="flex flex-wrap items-center justify-center max-w-[1323px] w-full gap-8">
          {products.data?.slice(0,8).map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
        <Button variant="showmore" size="showmore">Show More</Button>
      </section>
      <section className="py-16">
        <div className="flex flex-col items-center justify-center font-poppins">
          <p className="text-xl font-semibold text-gray5">
            Share your setup with
          </p>
          <p className="text-4xl font-bold text-shadow">#FuniroFurniture</p>
        </div>
        <img src={Furniturebg} alt="Furniture grid" className="w-full" />
      </section>

      <div className="flex items-center justify-center w-full">
        <CarouselDemo products={products?.data || []} />
      </div>
    </main>
  );
}
