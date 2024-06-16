//* Components imports
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

//* Hooks imports
import type { CartItem } from '@/hooks/use-shopping-cart';

type ShoppingCartCardProps = {
  item: CartItem;
  onRemove: (item: CartItem) => void;
}

export function ShoppingCartCard(props: ShoppingCartCardProps) {
  const { item, onRemove } = props;

  const handleRemove = () => onRemove(item);

  return (
    <li className="flex flex-row w-full">
      <div className="w-24 bg-emerald-600">
        <AspectRatio ratio={1}>
          <img
            src={item.image}
            alt={item.name}
            className="object-cover rounded-md"
          />
        </AspectRatio>
      </div>
      <div className="flex flex-row flex-1 bg-blue-300">
        <div className="flex flex-col flex-1 bg-yellow-300">
          <span>{item.id}</span>
          <span>{item.name}</span>
          <span>{item.price}</span>
          <span>{item.quantity}</span>
        </div>
        <div className="flex items-center justify-center bg-slate-700">
          <Button onPointerDown={handleRemove} variant="ghost">Remove</Button>
        </div>
      </div>
    </li>
  );
}