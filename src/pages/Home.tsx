import Dining from "../assets/dining.jpg";
import Living from "../assets/living.jpg";
import Bedroom from "../assets/bedroom.jpg";
import Furniturebg from "../assets/furniturebg.jpg";

export function Home() {
  return (
    <main className="">
      <section className="flex flex-col py-14 gap-14">
        <div className="font-poppins flex flex-col items-center justify-center">
          <p className="font-bold text-4xl">Browse The Range</p>
          <p className="font-normal text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="font-poppins font-semibold text-2xl flex flex-row justify-between items-center px-36">
          <div className="flex flex-col items-center justify-center gap-8">
            <img src={Dining} alt="Dining room" className="rounded-xl shadow-xl"/>
            <p>Dining</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-8">
            <img src={Living} alt="Living room" className="rounded-xl shadow-xl"/>
            <p>Living</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-8">
            <img src={Bedroom} alt="Bedroom" className="rounded-xl shadow-xl"/>
            <p>Bedroom</p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="flex flex-col items-center justify-center font-poppins">
            <p className="font-semibold text-xl text-gray5">Share your setup with</p>
            <p className="font-bold text-4xl text-shadow">#FuniroFurniture</p>
        </div>
        <img src={Furniturebg} alt="Furniture image grid" className="w-full" />
      </section>
    </main>
  );
}
