import { ProductType } from "types";
import LikeButton from "./LikeButton";
import { classNames } from "@/lib/utils";

type Props = {
  product: ProductType;
};

const ProductItem = ({ product }: Props) => {
  return (
    <li
      key={product.id}
      className="w-[50%] basis-[50%] md:w-[25%] md:basis-[25%] shrink-0 snap-start snap-always h-full cursor-pointer overflow-hidden bg-transparent flx flex-col items-start"
    >
      <article className="w-full h-full relative" >
        <div className="relative w-full h-auto">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full bg-transparent object-cover object-center"
          />
          <ul className="list-none flex items-center justify-start gap-[2px] absolute bottom-2 left-0" >
            {
              product.tags.map((tag) => (
                <li key={tag} className={classNames(
                  "h-6 w-fit text-xs font-helveticaMedium p-2 flex items-center justify-center",
                  tag === "Promo" ? "bg-red-700 text-white" : "bg-white text-black"
                )}>
                  <span>{tag}</span>
            </li>
              ))
            }
          </ul>
        </div>
        <div className="bg-transparent">
          <p className="text-black text-sm font-helveticaMedium leading-none mt-2">
            {product.boutique}
          </p>
          <h3 className="sm-normal-text mt-1">{product.name}</h3>
          <p className="text-red-700 text-sm font-helveticaBold mt-2 leading-none">
            {product.price}
          </p>
        </div>
        {product.reduction.text && (
          <div className="flex items-center justify-start my-1">
            <span className="text-text-grey text-xs font-helveticaRegular">
              {product.reduction.text}{":"}<span className="line-through px-1" >{product.reduction.amount}</span>
            </span>
            <span className="text-red-700 text-xs font-helveticaMedium">
              {product.reduction.percent}
            </span>
          </div>
        )}
        {product.premium && (
          <div className="flex items-center justify-start w-full gap-2 mt-1">
            <span className="xs-normal-text bg-white flex items-center border border-black justify-center px-2 py-[0.5px] rounded-xl w-fit">
              Plus
            </span>
            <span className="sm-normal-text">Livraison premium</span>
          </div>
        )}
        <LikeButton />
      </article>
    </li>
  );
};

export default ProductItem;
