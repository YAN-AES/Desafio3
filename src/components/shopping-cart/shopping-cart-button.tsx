//* Libraries imports
import { useState } from "react";

//* Components imports
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { ShoppingCartContent } from "./shopping-cart-content";
import { ShoppingCartFooter } from "./shopping-cart-footer";
import CartIcon from "@/assets/carticon.png";

//* Hooks imports
import { useMediaQuery } from "@/hooks/common/use-media-query";

export function ShoppingCartButton() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="transparent" size="icon">
            <img src={CartIcon} />
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col p-0 bg-red-300 border-none h-svh max-h-svh">
          <SheetHeader className="flex items-start justify-between pl-8 pt-7 h-24">
            <SheetTitle className="font-poppins font-semibold text-2xl">Shopping Cart</SheetTitle>
            <div className="w-72 h-[1px] bg-gray3"></div>
          </SheetHeader>

          <ShoppingCartContent />

          <SheetFooter className="p-0">
            <ShoppingCartFooter />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="transparent" size="icon">
          <img src={CartIcon} />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="flex flex-col p-0 bg-red-300 border-none h-svh max-h-[75svh]">
        <DrawerHeader className="text-left">
          <DrawerTitle>Shopping Cart</DrawerTitle>
        </DrawerHeader>

        <ShoppingCartContent />

        <DrawerFooter className="p-0">
          <ShoppingCartFooter />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
