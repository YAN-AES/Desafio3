//* Libraries imports
import z from "zod";

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  description: z.string(),
  image: z.string(),
  stock: z.number(),
  discount: z.number().optional(),
  isNew: z.boolean().optional(),
});

export type Product = z.infer<typeof productSchema>;