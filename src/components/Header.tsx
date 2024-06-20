import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import Logo from "../assets/logo2.png";

export function Header() {
  return (
    <header className="w-full">
      <div className="flex flex-col w-full items-center justify-center h-[316px] gap-4 bg-red-400">
        <img src={Logo} alt="" />
        <h1 className="font-poppins font-medium text-5xl">Shop</h1>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="font-semibold">
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Shop</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
}
