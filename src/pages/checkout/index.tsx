//* Components imports
import { CheckoutForm } from "./form";
import { Header } from "@/components/Header";
import { ServicesBanner } from "@/components/ServicesBanner";

export function Checkout() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-8">
      <Header title="Checkout"/>
      <CheckoutForm />
      <ServicesBanner />
    </div>
  );
}

