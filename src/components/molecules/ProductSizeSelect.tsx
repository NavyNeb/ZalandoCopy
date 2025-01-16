import { useSizeDropdownContext } from "@/context/SizeDropdownContext";
import { SIZES_DATA } from "@/data";
import { classNames } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { SizesDataType } from "types";
import ProductSizeItem from "../atoms/ProductSizeItem";

const ProductSizeSelect = () => {
  const { isOpen, toggleDropdown, selectedSize, setSelected } =
    useSizeDropdownContext();

  const handleSizeSelect = (size: SizesDataType) => {
    setSelected(size);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className={classNames(
          "flex items-center justify-between flex-1 w-full h-12 py-3 px-2 ring-1 ring-black hover:ring-2 focus:ring-2",
          selectedSize ? "ring-2 ring-black" : ""
        )}
      >
        <span className="text-base text-text-grey font-helveticaRegular ">
          {selectedSize !== undefined && (
            <span className="text-base text-black font-helveticaBold uppercase mr-2">
              {selectedSize.value}
            </span>
          )}
          {selectedSize?.info ?? `Votre taille`}
        </span>
        {isOpen ? <ChevronUp /> : <ChevronDown className="h-6 w-6" />}
      </button>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute z-10 left-[-2px] bg-white border-b-2 border-r-2 border-l-2 border-black top-[48px] w-[100.6%]"
          >
            {SIZES_DATA.map((item) => {
              return (
                <ProductSizeItem
                  item={item}
                  onClickSelect={handleSizeSelect}
                  selectedSize={selectedSize}
                />
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductSizeSelect;
