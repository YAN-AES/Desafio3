import ErrorImg from "@/assets/404Page.png";
import Logo from "@/assets/logo2.png";
import Bg from "@/assets/homebg.jpg";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function ErrorPage() {
  return (
    <main>
      <section className="flex flex-col w-full min-h-svh relative items-center justify-center">
        <img
          src={Bg}
          alt=""
          className="absolute left-0 top-0 w-full h-full object-cover z-0 blur-sm"
        />
        <div className="bg-white z-10 rounded-xl flex flex-col items-center justify-center gap-10 p-8">
          <div className="flex flex-row gap-2 items-center justify-center">
            <div>
              <img src={Logo} alt="" />
            </div>
            <p className="font-bold text-4xl">Furniro</p>
          </div>
          <div className="h-[1px] w-full bg-gray3"></div>
          <div className="flex flex-row items-center justify-center font-poppins">
            <div className="flex flex-col items-center justify-center w-full">
              <span className="text-9xl font-semibold font-poppins">Error</span>
              <span className="text-9xl font-semibold font-poppins">404</span>
            </div>
            <div>
              <img src={ErrorImg} alt="" className="w-full" />
            </div>
          </div>
          <Button variant="submit" size="submit"><Link to="/home">Home</Link></Button>
        </div>
      </section>
    </main>
  );
}
