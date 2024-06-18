//* Libraries imports
import { useQuery } from "@tanstack/react-query";
import z from "zod";

//* Local imports
import { cepUnmask } from "@/utils/masks/cep";

const cepSchema = z.object({
  cep: z.string(),
  logradouro: z.string(),
  bairro: z.string(),
  localidade: z.string(),
  uf: z.string(),
});

export type Cep = z.infer<typeof cepSchema>;

/**
 * Fetches a CEP from the ViaCEP API
 * 
 * Example:
 * ```tsx
 * const cep = "01001000"; // CEP must be without dashes
 * const { data, isLoading, error } = useCep(cep);
 * ```
 */

async function fetchCep(cep: string, onCepUpdate?: (cep: Cep) => void) {
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Invalid CEP");
  }

  const data = await response.json();
  const parsedCep = cepSchema.safeParse(data);

  if (!parsedCep.success) {
    console.error(parsedCep.error.errors.flat());
    throw new Error("Invalid CEP");
  }

  if (onCepUpdate) {
    onCepUpdate(parsedCep.data);
  }

  return parsedCep.data;
}

/**
 * Fetches a CEP from the ViaCEP API
 * 
 * Example:
 * ```tsx
 * const cep = "01001000"; // CEP can be with or without dashes
 * const { data, isLoading, error } = useCep(cep);
 * ```
 */

export function useCep(cep: string | undefined, onCepUpdate?: (cep: Cep) => void) {
  let unmaskedCep = "";

  if (cep) {
    unmaskedCep = cepUnmask(cep);
  }

  return useQuery({
    queryKey: ["cep", cep],
    queryFn: async () => await fetchCep(unmaskedCep, onCepUpdate),
    enabled: unmaskedCep.length === 8,
    staleTime: 1000 * 60 * 60 * 24, // 1 day
  });
}