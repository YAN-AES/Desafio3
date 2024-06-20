import Dining from "../assets/dining.jpg";
import Living from "../assets/living.jpg";
import Bedroom from "../assets/bedroom.jpg";
import Furniturebg from "../assets/furniturebg.jpg";
import Homebg from "@/assets/homebg.jpg";
import { CTA } from "@/components/CTA";

export function Home() {
  return (
    <main>
      <section>
        <div className="relative flex min-h-svh items-center justify-end w-full pr-14">
          <img
            src={Homebg}
            alt=""
            className="absolute left-0 top-0 w-full h-full object-cover z-0"
          />
          <CTA />
        </div>
      </section>
      <section className="flex flex-col py-14 gap-14">
        <div className="flex flex-col items-center justify-center font-poppins">
          <p className="text-4xl font-bold">Browse The Range</p>
          <p className="text-xl font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex flex-row items-center justify-between text-2xl font-semibold font-poppins px-36">
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
      <section className="py-16">
        <div className="flex flex-col items-center justify-center font-poppins">
          <p className="text-xl font-semibold text-gray5">
            Share your setup with
          </p>
          <p className="text-4xl font-bold text-shadow">#FuniroFurniture</p>
        </div>
        <img src={Furniturebg} alt="Furniture grid" className="w-full" />
      </section>
    </main>
  );
}
