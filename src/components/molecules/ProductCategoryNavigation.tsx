import { classNames } from "@/lib/utils";
import SearchInput from "./SearchInput";

const links = [
  "Soldes",
  "New in",
  "Vetements",
  "Chaussures",
  "Accessoires",
  "Luxe & Créatures",
  "Streetwear",
  "Sport",
  "Beauté",
  "Inspirations",
];

const ProductCategoryNavigation = () => {
  return (
    <div className="product-container m-0 items-end justify-between">
      <ul className="gap-x-4 w-full flex items-center justify-start mb-2">
        {links.map((link, index) => (
          <li
            className={`group w-fit relative flex items-center gap-x-1 ${
              index === 0 ? "text-[#FF4C00]" : "text-black"
            } text-sm font-helveticaRegular`}
          >
            <span>{link}</span>

            <div className={classNames(
                "absolute h-[2px] hidden w-full bottom-0 group-hover:block",
                index === 0 ? "bg-[#FF4C00]" : "bg-black"
            )} />
          </li>
        ))}
      </ul>
      <SearchInput />
    </div>
  );
};

export default ProductCategoryNavigation;
