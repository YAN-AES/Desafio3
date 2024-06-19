//* Components imports
import { CheckoutForm } from "./form";

export function Checkout() {
  return (
    <main>
      <section className="flex flex-row items-start justify-center font-poppins gap-16 pt-24">
        <div className="flex flex-col items-start w-full max-w-[453px] gap-9">
          <span className="font-poppins font-semibold text-4xl pl-4">
            Biling details
          </span>
          <div>
            <CheckoutForm />
          </div>
        </div>
        <div className="flex flex-col items-center max-w-[527px] w-full pt-12 gap-6">
          <div className="flex flex-row items-center justify-between w-full font-medium text-2xl">
            <span>Products</span>
            <span>Subtotal</span>
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <span className="flex flex-row items-center justify-center gap-4"><span className="text-gray3">Sofa</span><span>x</span><span>1</span></span>
            <span className="font-light">Rs. 250,000.00</span>
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <span className="font-medium">Subtotal</span>
            <span className="font-light">Rs. 250,000.00</span>
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <span className="font-bold ">Total</span>
            <span className="font-bold text-2xl text-brown2">Rs. 250,000.00</span>
          </div>
          <div className="flex w-full bg-gray3 h-[1px]"></div>
        </div>
      </section>
    </main>
  );
}
