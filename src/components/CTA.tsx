import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export function CTA() {
  return (
    <div className="flex flex-col bg-brown1 p-10 items-start gap-10 rounded-xl w-full md:w-[643px] font-poppins z-10">
      <div className="flex flex-col gap-2">
        <p className="font-semibold">New Arrival</p>
        <p className="text-6xl font-bold text-brown2">
          Discover Our <br />
          New Collection
        </p>
        <p className="text-lg font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br />
          elit tellus, luctus nec ullamcorper mattis.
        </p>
      </div>
      <Button variant="cta" size="cta"><Link to="/error">BUY NOW</Link></Button>
    </div>
  );
}
