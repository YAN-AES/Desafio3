//* Libraries imports
import z from "zod";

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  description: z.string(),
  image: z.string(),
  stock: z.number(),
});

export type Product = z.infer<typeof productSchema>;