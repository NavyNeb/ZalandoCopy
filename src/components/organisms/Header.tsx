import HeaderLinks from "../molecules/HeaderLinks";
import ZalandoLogo from "../atoms/ZalandoLogo";
import { HEADER_ICONS } from "@/data";
import HeaderDropdownIcons from "../molecules/HeaderDropdownIcons";
import ProductCategoryNavigation from "../molecules/ProductCategoryNavigation";
import { SearchIcon, X } from "lucide-react";

const Header = () => {

  return (
    <>
    
    <div className="product-container mb-0 gap-x-6 bg-[#4d008c] py-1  sm:before:flex-1">
      <p className="text-sm leading-6 text-white">
        <a href="#"className="xs-normal-text text-white" >
          DEUXIÈME DÉMARQUE ! Plus de looks, plus de SOLDES jusqu'à -60%* 👉&nbsp;<span aria-hidden="true">&rarr;</span>
        </a>
      </p>
      <div className="flex flex-1 justify-end">
        <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span className="sr-only">Dismiss</span>
          <X className="h-5 w-5 text-white" aria-hidden="true" />
        </button>
      </div>
    </div>
    <header className="md:mb-3 border-b pt-3 h-fit border-border-secondary bg-white w-screen relative">
      <nav className="product-container mb-2 m-0 ">
        <HeaderLinks />
        <div className = "flex items-center justify-center " >
          <ZalandoLogo />
          <div className = "w-[1px] hidden shrink-0 mx-6 h-6 bg-border-secondary md:block" />
          <div className="hidden items-center justify-start w-full gap-2 mt-1 md:flex">
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
      <div className="hidden lg:block" >
        <ProductCategoryNavigation />  
      </div>
      <div className="block lg:hidden border-t border-border-secondary">
          <div className="sticky top-0 z-40 flex h-12 shrink-0 items-center gap-x-4 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
              <span className="sr-only">Open sidebar</span>
              <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" focusable="false" aria-hidden="true"><path d="M.75 2.25h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5m22.5 19.5H.75a.75.75 0 0 0 0 1.5h22.5a.75.75 0 0 0 0-1.5m-22.5-9h12a.75.75 0 0 0 0-1.5h-12a.75.75 0 0 0 0 1.5"></path></svg>
            </button>

            {/* Separator */}
            <div className="h-full w-px bg-border-secondary lg:hidden" aria-hidden="true" />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <form className="relative flex flex-1" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
               
                <input
                  id="search-field"
                  className="block h-full w-full border-0 py-0 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                  placeholder="Rechercher..."
                  type="search"
                  name="search"
                />
              </form>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Search ioc</span>
                  <SearchIcon
                  className="h-6 w-6 text-gray-400"
                  aria-hidden="true"
                />
                </button>

                
              </div>
            </div>
          </div>
      </div>
   
    </header>
    </>
  );
};

export default Header;
