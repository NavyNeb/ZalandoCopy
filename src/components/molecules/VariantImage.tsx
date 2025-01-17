import { classNames } from "@/lib/utils";
import shoesImage from '@/assets/images/shoes.jpg'
import shoesImage2 from '@/assets/images/shoes2.jpg'

type Props = {
  src?: string;
  current?: boolean;
};

const VariantImage = ({ current }: Props) => {
  return (
    <ul className="flex list-none flex-row items-center justify-start space-x-3">
      <li
        className={classNames(
          `h-24 w-16 flex items-center justify-center hover:ring-2 hover:ring-black`,
          current ? `ring-2 ring-black` : ``
        )}
      >
        <img
          src={shoesImage}
          className="w-full h-full object-cover"
        />
      </li>
      <li
        className={classNames(
          `h-24 w-16 flex items-center justify-center hover:ring-2 hover:ring-black`,
          current ? `ring-2 ring-black` : ``
        )}
      >
        <img
          src={shoesImage2}
          className="w-full h-full object-cover"
        />
      </li>
    </ul>
  );
};

export default VariantImage;
