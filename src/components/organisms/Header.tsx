import HeaderLinks from "../molecules/HeaderLinks";
import ZalandoLogo from "../atoms/ZalandoLogo";
import { HEADER_ICONS } from "@/data";
import HeaderDropdownIcons from "../molecules/HeaderDropdownIcons";

const Header = () => {

  return (
    <header className="py-3 mb-3 border-b border-border-secondary bg-white w-screen relative">
      <nav className="product-container mx-auto h-full ">
        {/* <img src={logo} className="h-[40px] w-32 object-contain " /> */}
        <HeaderLinks />
        <div className = "flex items-center justify-center" >
          <ZalandoLogo />
          <div className = "w-[1px] shrink-0 mx-6 h-6 bg-border-secondary" />
          <div className="flex items-center justify-start w-full gap-2 mt-1">
            <span className="sm-normal-text text">Zoom sur</span>
            <span className="xs-normal-text bg-white flex items-center border border-black justify-center px-2 py-[0.5px] rounded-xl w-fit">
              Plus
            </span>
          </div>
        </div>
        <div className = "row-flex" >
         {
          HEADER_ICONS.map((icon, index: number) => (
            <HeaderDropdownIcons {...icon} key={index} />
          ))
         }
        </div>
      </nav>

     
    </header>
  );
};

export default Header;
