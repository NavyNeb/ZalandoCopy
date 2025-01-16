import { DELIVERY_DATA } from "@/data";
import ProductDeliveryItem from "../atoms/ProductDeliveryItem";
import { DeliveryDataType } from "types";
import { useSizeDropdownContext } from "@/context/SizeDropdownContext";


const ProductDelivery = () => {
    const {  } = useSizeDropdownContext();
  return (
    <ul className="flex flex-col items-center justify-center border border-border-secondary divide-y divide-border-secondary">
        <div className="w-full px-5 py-4 ">
            <span className="sm-normal-text" >Vendu et envoyé par   <span className='text-text-interactive text-sm font-helveticaBold' >Zalando</span></span>
      </div>  
      <div className="bg-black w-full px-5 py-4 ">
        <span className="xs-normal-text bg-white flex items-center justify-center px-2 py-[0.5px] rounded-xl w-fit mb-2">
          Plus
        </span>
        <p className="sm-normal-text font-helveticaMedium text-white mb-4">
          Cumulez des points et obtenez des récompenses
        </p>
        <p className="text-[0.875rem] text-white font-helveticaBold underline py-px">
          J'adhère à Plus
        </p>
      </div>
      {
        // Delivery items
        DELIVERY_DATA.map((item: DeliveryDataType, index) => (
         <ProductDeliveryItem item={item} key={index} />
        ))
      }
    </ul>
  );
};

export default ProductDelivery;
