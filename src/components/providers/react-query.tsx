//* Libraries imports
import type { ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";

//* Utils imports
import { queryClient } from "@/utils/query-client";

export function ReactQueryProvider(props: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
}