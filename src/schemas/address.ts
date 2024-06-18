//* Libraries imports
import z from "zod";

//* Masks imports
import { cepUnmask } from "@/utils/masks/cep";

/**
 * Address schema.
 * 
 * The CEP can be with the dashes, but it will be unmasked before validation.
 */

export const addressSchema = z.object({
  number: z
    .string({
      message: "Number is required",
      invalid_type_error: "Number must be a string",
      required_error: "Number is required",
    })
    .min(1, {
      message: "Number must have at least 1 character",
    })
    .max(10, {
      message: "Number must have at most 10 characters",
    }),
  zipCode: z
    .string({
      message: "Zip code is required",
      invalid_type_error: "Zip code must be a string",
      required_error: "Zip code is required",
    })
    .min(8, {
      message: "Zip code must have at least 8 characters",
    })
    .max(9, {
      message: "Zip code must have at most 9 characters",
    })
    .refine((value) => {
      return cepUnmask(value).length === 8;
    }, {
      message: "Invalid zip code",
    }),
  city: z
    .string({
      message: "City is required",
      invalid_type_error: "City must be a string",
      required_error: "City is required",
    })
    .min(2, {
      message: "City must have at least 2 characters",
    })
    .max(128, {
      message: "City must have at most 128 characters",
    }),
  state: z
    .string({
      message: "State is required",
      invalid_type_error: "State must be a string",
      required_error: "State is required",
    })
    .min(2, {
      message: "State must have at least 2 characters"
    })
    .max(128, {
      message: "State must have at least 2 characters"
    }),
  country: z
    .string({
      message: "Country is required",
      invalid_type_error: "Country must be a string",
      required_error: "Country is required",
    })
    .min(2, {
      message: "Country must have at least 2 characters"
    })
    .max(128, {
      message: "Country must have at least 2 characters"
    }),
  street: z
    .string({
      message: "Street is required",
      invalid_type_error: "Street must be a string",
      required_error: "Street is required",
    })
    .min(2, {
      message: "Street must have at least 2 characters"
    })
    .max(128, {
      message: "Street must have at least 2 characters"
    }),
  extra: z
    .string({
      message: "Extra is required",
      invalid_type_error: "Extra must be a string",
      required_error: "Extra is required",
    })
    .max(256, {
      message: "Extra must have at most 256 characters",
    })
    .optional(),
});

export type Address = z.infer<typeof addressSchema>;