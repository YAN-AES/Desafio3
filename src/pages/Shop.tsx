//* Components Imports
import { ProductCard } from "@/components/Card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Header } from "@/components/Header";

//* Hooks Imports
import { useProducts } from "@/hooks/queries/use-products";

export function Shop() {
  const products = useProducts();

  return (
    <main className="w-full flex flex-col">
        <Header title="Shop" />
      <section className="flex flex-col items-center justify-center pt-16">
        <div className="flex flex-wrap items-center justify-center max-w-[1323px] w-full gap-8">
          {products.data?.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>
    </main>
  );
}
