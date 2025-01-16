import VariantImage from '../molecules/VariantImage';


const ProductImageVariants = () => {
  return (
    <div>
        <span className='sr-only' >Variants Images</span>
        <p className='text-[0.875rem] tracking-tight text-[#000] font-helveticaRegular mb-2' >
            Colour: <span className='font-helveticaBold'>Dark Grey</span>
        </p>
        <VariantImage />
    </div>
  )
}

export default ProductImageVariants;