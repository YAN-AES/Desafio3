import { Button } from "./ui/button";

export function CTA() {
  return (
    <div className="flex flex-col bg-yellow-100 p-10 items-start gap-10 rounded-xl w-[643px]">
      <div className="flex flex-col gap-2">
        <p>New Arrival</p>
        <p className="text-6xl font-bold">
          Discover Our <br />
          New Collection
        </p>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br />
          elit tellus, luctus nec ullamcorper mattis.
        </p>
      </div>
      <Button variant="cta" size="cta">BUY NOW</Button>
    </div>
  );
}
