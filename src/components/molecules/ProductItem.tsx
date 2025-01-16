import React from "react";
import HeartIcon from "../atoms/HeartIcon";
import { ProductType } from "types";

type Props = {
  product: ProductType;
};

const ProductItem = ({ product }: Props) => {
  return (
    <li
      key={product.id}
      className="min-w-72 basis-[33.333%] overflow-hidden relative bg-transparent flx flex-col items-start"
    >
      <article>
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="max-w-full bg-transparent object-cover object-center"
          />
          {product.promo && (
            <div className="bg-red-700 h-6 w-fit text-white text-xs font-helveticaMedium p-2 flex items-center justify-center absolute bottom-2 left-">
              <span>Promo</span>
            </div>
          )}
        </div>
        <div className="bg-transparent">
          <p className="text-black text-xs font-helveticaMedium leading-none mt-2">
            {product.boutique}
          </p>
          <h3 className="sm-normal-text mt-1">{product.name}</h3>
          <p className="text-red-700 text-sm font-helveticaBold mt-2 leading-none">
            {product.price}
          </p>
        </div>
        <div className="bg-white h-10 w-10 p-2 flex items-center justify-center absolute right-0 top-2">
          <HeartIcon />
        </div>
        {product.reduction.text && (
          <div className="flex items-center justify-start my-1">
            <span className="text-text-grey text-xs font-helveticaRegular">
              {product.reduction.text}
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
      </article>
    </li>
  );
};

export default ProductItem;
