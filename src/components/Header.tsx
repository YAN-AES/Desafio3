import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import Logo from "../assets/logo2.png";
import Bg from "@/assets/headerbg.jpg";

type Props = {
  title: string;
}

export function Header(props: Props) {
  return (
    <header className="w-full">
      <div className="flex flex-col w-full relative items-center justify-center h-[316px] gap-4">
        <img
          src={Bg}
          className="absolute left-0 top-0 w-full h-full object-cover z-0"
        />
        <div className="z-[1] flex flex-col items-center justify-center gap-4">
          <img src={Logo} alt="" />
          <h1 className="font-poppins font-medium text-5xl">{props.title}</h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="font-semibold">
                <BreadcrumbLink href="/home">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{props.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </header>
  );
}
