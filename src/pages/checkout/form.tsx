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

//* Masks imports
import { cepMask } from "@/utils/masks/cep";
import { numberMask } from "@/utils/masks/number";

export function CheckoutForm() {
  const form = useForm<Checkout>({
    resolver: zodResolver(checkoutSchema),
  });

  const checkout = useCheckout();

  const zipCode = form.watch("zipCode");
  useCep(zipCode, (cep) => {
    form.setValue("city", cep.localidade);
    form.setValue("state", cep.uf);
    form.setValue("country", "Brazil");
    form.setValue("street", cep.logradouro);
  });

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
    <form onSubmit={onSubmit} className="flex flex-col p-4 gap-8">
      <div className="flex flex-row justify-between gap-8">
        <div className="flex flex-col gap-5">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            type="text"
            className="font-poppins font-medium border-gray3 h-12"
            maxLength={128}
            {...form.register("firstName")}
          />
          <ErrorLabel>{form.formState.errors.firstName?.message}</ErrorLabel>
        </div>

        <div className="flex flex-col gap-5">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            type="text"
            className="font-poppins font-medium border-gray3 h-12"
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
          className="font-poppins font-medium border-gray3 h-12"
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
          className="font-poppins font-medium border-gray3 h-12"
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
          className="font-poppins font-medium border-gray3 h-12"
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
          className="font-poppins font-medium border-gray3 h-12"
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
          className="font-poppins font-medium border-gray3 h-12"
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
          className="font-poppins font-medium border-gray3 h-12"
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
          className="font-poppins font-medium border-gray3 h-12"
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
          className="font-poppins font-medium border-gray3 h-12"
          maxLength={256}
          {...form.register("email")}
        />
        <ErrorLabel>{form.formState.errors.email?.message}</ErrorLabel>
      </div>

      <div>
        <Label htmlFor="extra"></Label>
        <Input
          id="extra"
          type="text"
          placeholder="Additional Information"
          className="placeholder:font-poppins placeholder:font-normal font-poppins font-medium border-gray3 h-12"
          maxLength={256}
          {...form.register("extra")}
        />
        <ErrorLabel>{form.formState.errors.extra?.message}</ErrorLabel>
      </div>

      <Button
        type="submit"
        disabled={checkout.isPending}
      >
        Place Order
      </Button>
    </form>
  );
}

type ErrorLabelProps = {
  children: ReactNode;
}

function ErrorLabel(props: ErrorLabelProps) {
  return <span className="text-red-600">{props.children}</span>;
}