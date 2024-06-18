//* Components imports
import { CheckoutForm } from "./form";

export function Checkout() {
  return (
    <div className="flex flex-col items-start w-full max-w-[453px]">
      <span className="font-poppins font-semibold text-3xl pl-4">Biling details</span>
      <div>
        <CheckoutForm />
      </div>
    </div>
  );
}
