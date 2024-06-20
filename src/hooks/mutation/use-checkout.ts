//* Libraries imports
import { useMutation } from "@tanstack/react-query";
import z from "zod";

//* Schemas imports
import { addressSchema } from "@/schemas/address";
import { productSchema } from "@/schemas/product";

export const checkoutSchema = z
  .object({
    items: z
      .array(
        z.object({
          id: productSchema.shape.id,
          quantity: z
            .number({
              message: "Quantity is required",
              invalid_type_error: "Quantity must be a number",
              required_error: "Quantity is required",
            })
            .min(1, {
              message: "Quantity must be at least 1",
            })
        }), {
        message: "Items are required",
        invalid_type_error: "Items must be an array",
        required_error: "Items are required",
      })
      .min(1, {
        message: "Items must have at least 1 item",
      })
      .max(100, {
        message: "Items must have at most 100 items",
      }),
    firstName: z
      .string({
        message: "First Name is required",
        invalid_type_error: "First Name must be a string",
        required_error: "First Name is required",
      })
      .min(2, {
        message: "First Name must have at least 2 characters",
      })
      .max(128, {
        message: "First Name must have at most 128 characters",
      }),
    lastName: z
      .string({
        message: "Last Name is required",
        invalid_type_error: "Last Name must be a string",
        required_error: "Last Name is required",
      })
      .min(2, {
        message: "Last Name must have at least 2 characters",
      })
      .max(128, {
        message: "Last Name must have at most 128 characters",
      }),
    companyName: z
      .string({
        message: "Company Name is required",
        invalid_type_error: "Company Name must be a string",
        required_error: "Company Name is required",
      })
      .max(128, {
        message: "Company Name must have at most 128 characters",
      })
      .optional(),
    email: z
      .string({
        message: "Email is required",
        invalid_type_error: "Email must be a string",
        required_error: "Email is required",
      })
      .email({
        message: "Invalid email",
      })
      .max(256, {
        message: "Email must have at most 256 characters",
      }),
  })
  .merge(addressSchema);

export type Checkout = z.infer<typeof checkoutSchema>;

async function checkout(data: Checkout) {
  console.log(data);
}

export function useCheckout() {
  return useMutation({
    mutationFn: checkout,
  });
}