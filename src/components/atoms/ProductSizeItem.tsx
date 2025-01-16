import { classNames } from "@/lib/utils";
import React from "react";
import { SizesDataType } from "types";

type Props = {
    item: SizesDataType;
    selectedSize?: SizesDataType;
    onClickSelect: (item: SizesDataType) => void;
};

const ProductSizeItem = ({ item, selectedSize, onClickSelect }: Props) => {
    const { label, info, value } = item;
    
  return (
    <>
      <li
        onClick={() => onClickSelect(item)}
        key={value}
        className={classNames(
          "relative flex items-center justify-between py-2 hover:bg-gray-300 overflow-clip",
          selectedSize?.label === label
            ? "border-b-2 border-t-2 border-black"
            : ""
        )}
      >
        <button className="flex items-center justify-between w-full py-1">
          <span
            className={classNames(
              "text-base font-helveticaBold pl-5 uppercase",
              info === "Épuisé" ? "text-text-grey" : "text-black"
            )}
          >
            {value}
          </span>
        </button>
        <span
          className={classNames(
            "text-sm text-black text-right pr-3 w-full",
            info === "Épuisé"
              ? "text-text-interactive font-helveticaBold"
              : "text-black font-helveticaRegular"
          )}
        >
          {info}
        </span>
        <div className="absolute bottom-0 bg-gray-300 ml-5 h-[1px] flex-1 w-full" />
      </li>
    </>
  );
};

export default ProductSizeItem;
