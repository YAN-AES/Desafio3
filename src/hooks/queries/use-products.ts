//* Libraries imports
import { useQuery } from '@tanstack/react-query';
import z from 'zod';

//* Schemas imports
import { productSchema } from '@/schemas/product';

const apiResponse = z.array(productSchema);

async function fetchProducts() {
  const url = "https://run.mocky.io/v3/241d26ec-f2d5-48c9-85d4-92c49bca2399";

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json() as unknown;

  const parsedData = apiResponse.parse(data);

  return parsedData;
}

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
}