import HeaderLinks from "../molecules/HeaderLinks";
import ZalandoLogo from "../atoms/ZalandoLogo";
import { HEADER_ICONS } from "@/data";
import HeaderDropdownIcons from "../molecules/HeaderDropdownIcons";
import ProductCategoryNavigation from "../molecules/ProductCategoryNavigation";

const Header = () => {

  return (
    <header className="mb-3 border-b pt-3 h-fit border-border-secondary bg-white w-screen relative">
      <nav className="product-container mb-2 m-0 ">
        <HeaderLinks />
        <div className = "flex items-center justify-center " >
          <ZalandoLogo />
          <div className = "w-[1px] shrink-0 mx-6 h-6 bg-border-secondary" />
          <div className="flex items-center justify-start w-full gap-2 mt-1">
            <span className="sm-normal-text text">Zoom sur</span>
            <span className="xs-normal-text bg-white flex items-center border border-black justify-center px-2 py-[0.5px] rounded-xl w-fit">
              Plus
            </span>
          </div>
        </div>
        <div className = "row-flex gap-x-1" >
         {
          HEADER_ICONS.map((icon, index: number) => (
            <HeaderDropdownIcons {...icon} index={index} key={index} />
          ))
         }
        </div>
      </nav>
      <ProductCategoryNavigation />     
    </header>
  );
};

export default Header;
