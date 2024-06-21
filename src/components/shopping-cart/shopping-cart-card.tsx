//* Components imports
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

//* Hooks imports
import type { CartItem } from "@/hooks/use-shopping-cart";

import XIcon from "@/assets/xicon.png";

type ShoppingCartCardProps = {
  item: CartItem;
  onRemove: (item: CartItem) => void;
};

export function ShoppingCartCard(props: ShoppingCartCardProps) {
  const { item, onRemove } = props;

  const handleRemove = () => onRemove(item);

  return (
    <li className="flex flex-row w-full pl-5">
      <div className="w-24">
        <AspectRatio ratio={1}>
          <img
            src={item.image}
            alt={item.name}
            className="object-cover rounded-md"
          />
        </AspectRatio>
      </div>
      <div className="flex flex-row flex-1">
        <div className="flex flex-col flex-1 font-poppins pl-5 justify-center gap-3">
          <span>{item.name}</span>
          <div className="flex flex-row gap-3 items-center">
            <span>{item.quantity}</span>
            <span>x</span>
            <span className="text-brown2">Rs. {item.price}</span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Button onPointerDown={handleRemove} variant="transparent">
            <img src={XIcon} />
          </Button>
        </div>
      </div>
    </li>
  );
}
