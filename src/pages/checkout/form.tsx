//* Libraries imports
import type { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

//* Components imports
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

//* Hooks imports
import { useCep } from "@/hooks/queries/useCep";
import { useCheckout, type Checkout, checkoutSchema } from "@/hooks/mutation/use-checkout";
import { useShoppingCart } from "@/hooks/use-shopping-cart";

//* Masks imports
import { cepMask } from "@/utils/masks/cep";
import { numberMask } from "@/utils/masks/number";

export function CheckoutForm() {
  const form = useForm<Checkout>({
    resolver: zodResolver(checkoutSchema),
  });

  const shoppingCart = useShoppingCart();
  const checkout = useCheckout();

  const zipCode = form.watch("zipCode");
  useCep(zipCode, (cep) => {
    form.setValue("city", cep.localidade);
    form.setValue("state", cep.uf);
    form.setValue("country", "Brazil");
    form.setValue("street", cep.logradouro);
  });

  //add the items list to the checkout
  form.setValue("items", shoppingCart.cart);

  const onSubmit = form.handleSubmit((data) => {
    checkout.mutate(data, {
      onSuccess: () => {
        toast.success("Order placed successfully");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  });

  return (
    <form onSubmit={onSubmit} className="grid max-w-5xl md:grid-cols-2 grid-cols-1 grid-rows-1 gap-8 p-4">
      <div className="w-full col-span-1">
        <div className="flex flex-row justify-between gap-8">
          <div className="flex flex-col w-full gap-5">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              type="text"
              className="h-12 font-medium font-poppins border-gray3"
              maxLength={128}
              {...form.register("firstName")}
            />
            <ErrorLabel>{form.formState.errors.firstName?.message}</ErrorLabel>
          </div>

          <div className="flex flex-col w-full gap-5">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              type="text"
              className="h-12 font-medium font-poppins border-gray3"
              maxLength={128}
              {...form.register("lastName")}
            />
            <ErrorLabel>{form.formState.errors.lastName?.message}</ErrorLabel>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <Label htmlFor="companyName">Company Name (Optional)</Label>
          <Input
            id="companyName"
            type="text"
            className="h-12 font-medium font-poppins border-gray3"
            maxLength={128}
            {...form.register("companyName")}
          />
          <ErrorLabel>{form.formState.errors.companyName?.message}</ErrorLabel>
        </div>

        <div className="flex flex-col gap-5">
          <Label htmlFor="zipCode">ZIP Code</Label>
          <Input
            id="zipCode"
            type="text"
            className="h-12 font-medium font-poppins border-gray3"
            maxLength={9}
            {
            ...form.register("zipCode", {
              // on change is an input event
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                const value = e.target.value;
                form.setValue("zipCode", cepMask(value));
              }
            })
            }
          />
          <ErrorLabel>{form.formState.errors.zipCode?.message}</ErrorLabel>
        </div>

        <div className="flex flex-col gap-5">
          <Label htmlFor="country">Country / Region</Label>
          <Input
            id="country"
            type="text"
            className="h-12 font-medium font-poppins border-gray3"
            maxLength={128}
            disabled
            {...form.register("country")}
          />
          <ErrorLabel>{form.formState.errors.country?.message}</ErrorLabel>
        </div>

        <div className="flex flex-col gap-5">
          <Label htmlFor="street">Street</Label>
          <Input
            id="street"
            type="text"
            className="h-12 font-medium font-poppins border-gray3"
            maxLength={128}
            disabled
            {...form.register("street")}
          />
          <ErrorLabel>{form.formState.errors.street?.message}</ErrorLabel>
        </div>

        <div className="flex flex-col gap-5">
          <Label htmlFor="city">Town / City</Label>
          <Input
            id="city"
            type="text"
            className="h-12 font-medium font-poppins border-gray3"
            maxLength={128}
            disabled
            {...form.register("city")}
          />
          <ErrorLabel>{form.formState.errors.city?.message}</ErrorLabel>
        </div>

        <div className="flex flex-col gap-5">
          <Label htmlFor="state">Province</Label>
          <Input
            id="state"
            type="text"
            className="h-12 font-medium font-poppins border-gray3"
            maxLength={128}
            disabled
            {...form.register("state")}
          />
          <ErrorLabel>{form.formState.errors.state?.message}</ErrorLabel>
        </div>

        <div className="flex flex-col gap-5">
          <Label htmlFor="number">Number</Label>
          <Input
            id="number"
            type="text"
            className="h-12 font-medium font-poppins border-gray3"
            maxLength={10}
            {
            ...form.register("number", {
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                const value = e.target.value;
                form.setValue("number", numberMask(value));
              }
            })
            }
          />
          <ErrorLabel>{form.formState.errors.number?.message}</ErrorLabel>
        </div>

        <div className="flex flex-col gap-5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            className="h-12 font-medium font-poppins border-gray3"
            maxLength={256}
            {...form.register("email")}
          />
          <ErrorLabel>{form.formState.errors.email?.message}</ErrorLabel>
        </div>

        <div>
          <Label htmlFor="extra">Extra</Label>
          <Input
            id="extra"
            type="text"
            placeholder="Additional Information"
            className="h-12 font-medium placeholder:font-poppins placeholder:font-normal font-poppins border-gray3"
            maxLength={256}
            {...form.register("extra")}
          />
          <ErrorLabel>{form.formState.errors.extra?.message}</ErrorLabel>
        </div>
      </div>

      <div className="w-full col-span-1 flex flex-col items-center">
        <CheckoutDetails />
        <Button
          type="submit"
          variant="placeorder"
          size="placeorder"
          disabled={checkout.isPending}
        >
          Place Order
        </Button>
      </div>
    </form>
  );
}

type ErrorLabelProps = {
  children: ReactNode;
}

function ErrorLabel(props: ErrorLabelProps) {
  return <span className="text-red-600">{props.children}</span>;
}

function CheckoutDetails() {
  const shoppingCart = useShoppingCart();

  //for just example, we are using the Brazilian currency
  const totalInLocalCurrency = shoppingCart.total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="flex flex-col items-center w-full gap-6 pt-12">
      <div className="flex flex-row items-center justify-between w-full text-2xl font-medium">
        <span>Products</span>
        <span>Subtotal</span>
      </div>

      <>
        {
          shoppingCart.cart.map((product) => {
            const id = product.id;
            const price = product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            });
            return (
              <div key={id} className="flex flex-row items-center justify-between w-full">
                <span className="flex flex-row items-center justify-center gap-4">
                  <span className="text-gray3">{product.name}</span>
                  <span>x</span>
                  <span>{product.quantity}</span>
                </span>
                <span className="font-light">Rs.{" "}{price}</span>
              </div>
            );
          })
        }
      </>

      <div className="flex flex-row items-center justify-between w-full">
        <span className="font-medium">Subtotal</span>
        <span className="font-light">Rs.{" "}{totalInLocalCurrency}</span>
      </div>


      <div className="flex flex-row items-center justify-between w-full">
        <span className="font-bold ">Total</span>
        <span className="text-2xl font-bold text-brown2">Rs.{" "}{totalInLocalCurrency}</span>
      </div>
      <div className="flex w-full bg-gray3 h-[1px]">

      </div>
    </div>
  );
}