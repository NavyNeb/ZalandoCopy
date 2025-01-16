import { PRODUCTS, PRODUCTS_MAIN } from "@/data";
import ProductMain from "../molecules/ProductMain";
import ProductItem from "../molecules/ProductItem";

type Props = {
  title?: string;
  desc?: string;
  type: "main" | "products";
};

// Sample data for products

const ProductListRow = ({ title, desc, type = "products" }: Props) => {
  return (
    <div className="w-full my-20">
      <div className="pl-6 lg:pl-[75px] lg:max-w-7xl">
        <p className="sm-bold-text text-3xl leading-none">{title}</p>
        <p className="text-black text-3xl font-tiemposReguar font-normal">
          {desc}
        </p>
      </div>
      <ul
        style={{ scrollbarWidth: "none" }}
        className="flex pl-6 lg:pl-[75px] items-start justify-start overflow-x-scroll scroll-bar-hide gap-x-4 gap-y-3 w-full my-4 scroll-pl-[88px] "
      >
        {/* Product items */}
        { type === "main" && PRODUCTS_MAIN.map((product) => {
           return <ProductMain product={product} />  
        })}
        {
            type === "products" && PRODUCTS.map((product, index) => {
              return <ProductItem product={product} key={index} />;
            })
  
        }
      </ul>
    </div>
  );
};

export default ProductListRow;
