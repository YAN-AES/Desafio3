//* Libraries imports
import { Link } from "react-router-dom";

//* Components imports
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

import type { Product } from "@/schemas/product";

//* Hooks imports
import { useShoppingCart } from "@/hooks/use-shopping-cart";

//* Images imports
import ShareIcon from "@/assets/share-icon.svg";
import CompareIcon from "@/assets/compare-icon.svg"
import LikeIcon from "@/assets/like-icon.svg"

type ProductCardProps = {
  product: Product;
}

export function ProductCard(props: ProductCardProps) {
  const shoppingCart = useShoppingCart();

  const url = `/product/${props.product.id}`;

  const discount = props.product.discount || 0;
  const price = props.product.price * (1 - (discount / 100));

  const handleAddToCart = () => {
    shoppingCart.addItem({
      id: props.product.id,
      name: props.product.name,
      price: props.product.price,
      quantity: 1,
      description: props.product.description,
      image: props.product.image,
      discount: props.product.discount,
      isNew: props.product.isNew,
    });
  }

  return (
    <div
      className="w-[285px] h-[446px] font-poppins bg-gray5 flex flex-col justify-start items-center group relative"
    >
      {
        discount > 0 &&
        <div className="absolute z-[9] text-white bg-red-400 rounded-full right-6 top-6 size-10 flex justify-center items-center">
          <span>{`-${discount}%`}</span>
        </div>
      }

      {
        props.product.isNew &&
        <div className="absolute z-[9] text-white bg-green-400 rounded-full right-6 top-6 size-10 flex justify-center items-center">
          <span>New</span>
        </div>
      }

      <Link
        to={url}
        className="absolute top-0 left-0 z-10 flex-col items-center justify-center hidden w-full h-full bg-black/50 group-hover:flex"
      />

      <div
        className="hidden group-hover:flex flex-col z-[11] absolute gap-4 top-1/2 left-1/2 items-center justify-center -translate-x-1/2 -translate-y-1/2"
      >
        <Button onPointerDown={handleAddToCart} variant="card" size="card">Add to cart</Button>
        <div className="flex flex-row justify-between">
          <Button variant="transparent" className="gap-1 text-white"><img src={ShareIcon} alt="" />Share</Button>
          <Button variant="transparent" className="gap-1 text-white"><img src={CompareIcon} alt="" />Compare</Button>
          <Button variant="transparent" className="gap-1 text-white"><img src={LikeIcon} alt="" />Like</Button>
        </div>
      </div>

      <AspectRatio ratio={285 / 301}>
        <img
          src={props.product.image}
          alt="Product"
          className="object-cover w-full h-full"
        />
      </AspectRatio>
      <div className="flex flex-col w-full h-full gap-2 justify-between py-2.5 px-4 bg-gray6">
        <span className="font-semibold text-shadow text-2xl">{props.product.name}</span>
        <span>{props.product.description}</span>
        <span className=" flex flex-row gap-3 items-center">
          <span className="font-semibold text-shadow text-xl">Rp {price}</span>
          {
            discount > 0 &&
            <span className="line-through text-gray7">Rp {props.product.price}</span>
          }
        </span>
      </div>
    </div>
  );
}
