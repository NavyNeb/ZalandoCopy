import { PRODUCTS, PRODUCTS_MAIN } from "@/data";
import ProductMain from "../molecules/ProductMain";
import ProductItem from "../molecules/ProductItem";
import { Info, MoveRight } from "lucide-react";

type Props = {
  title?: string;
  desc?: string;
  type: "main" | "products";
  seeMore?: boolean;
};

// Sample data for products

const ProductListRow = ({ title, desc, type = "products" }: Props) => {
  return (
    <div className="w-[100%] my-20">
      <div className="product-container">
        <div className="w-full ">
          <div className="w-full flex items-center justify-between" >
            <p className="text-2xl md:text-3xl text-black font-helveticaBold leading-none">{title}</p>
            <Info size={24} className="text-text-grey cursor-pointer" />
          </div>
          <div className="flex flex-col items-start md:flex-row md:items-center md:justify-between w-full h-full ">
            <p className="text-2xl md:text-3xl text-black font-tiemposReguar font-normal">
              {desc}
            </p>
            <button className="group w-fit relative flex items-center gap-x-1 text-text-interactive text-sm font-helveticaBold mt-2">
              <span>Voir plus</span>
              <span>
                <MoveRight color="#6328e0" size={24} />
              </span>
              <div className="absolute h-[2px] bg-text-interactive hidden w-full bottom-0 group-hover:block" />
            </button>
          </div>
        </div>
      </div>

      <ul
        style={{ scrollbarWidth: "none" }}
        className="product-container relative box-border border-0 flex items-start justify-start flex-nowrap overflow-x-scroll scroll-bar-hide gap-x-4 gap-y-3 w-full bg-pink-500 scroll-pl-[88px] "
      >
        {/* Product items */}
        {type === "main" &&
          PRODUCTS_MAIN.map((product) => {
            return <ProductMain product={product} />;
          })}
        {type === "products" &&
          PRODUCTS.map((product, index) => {
            return <ProductItem product={product} key={index} />;
          })}
      </ul>
    </div>
  );
};

export default ProductListRow;
