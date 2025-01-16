type Props = {
  title?: string;
};

const ProductMaterialItem = ({ title }: Props) => {
  return (
    <li className="text-black text-xs font-helveticaBold flex items-center justify-center ring-1 ring-black px-4 py-2 rounded-3xl w-fit">
      {title}
    </li>
  );
};

export default ProductMaterialItem;
