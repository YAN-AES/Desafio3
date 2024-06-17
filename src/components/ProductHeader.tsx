import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function ProductHeader() {
  return (
    <section className="w-full flex px-24 py-8 items-center justify-start bg-beige1">
      <div className="flex flex-row gap-8 items-center justify-center">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="text-gray3">
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem className="text-gray3">
              <BreadcrumbLink href="/">Shop</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </BreadcrumbList>
        </Breadcrumb>
        <div className="h-8 w-[2px] bg-gray3"></div>
        <span className="font-poppins font-normal">Asgaard Sofa</span>
      </div>
    </section>
  );
}
