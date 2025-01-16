import React from "react";
import { DeliveryDataType  } from "types";

type Props = {
  item: DeliveryDataType
};

const ProductDeliveryItem = ({ item }: Props) => {
  return (
    <li
      className="w-full flex items-center justify-between px-5 py-4"
    >
      <div className="flex-1 space-y-2">
        <div className="flex items-center justify-start gap-x-3">
          {item.icon}
          {item.iconTitle && (
            <span className="sm-bold-text">{item.iconTitle}</span>
          )}
        </div>
        <p className="sm-bold-text">{item.title}</p>
        <p className="sm-normal-text">{item.type}</p>
      </div>
      {item.price && <span className="sm-bold-text">{item.price}</span>}
    </li>
  );
};

export default ProductDeliveryItem;
