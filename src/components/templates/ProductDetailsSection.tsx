import ProductImageGallery from '../organisms/ProductImageGallery'
import ProductInfoSection from '../organisms/ProductInfoSection'


const ProductDetailsSection = () => {

  return (
    <div className="bg-white">
      <div className="mx-auto w-full md:px-6 py-16 sm:py-24 lg:max-w-[1478px]">
        <div className="md:grid md:grid-cols-2 md:items-start md:gap-x-3 lg:gap-x-8">
          {/* Image gallery */}
         <ProductImageGallery />

          {/* Product info */}
        <ProductInfoSection  />
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsSection