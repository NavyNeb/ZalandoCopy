import ProductImageGallery from '../organisms/ProductImageGallery'
import ProductInfoSection from '../organisms/ProductInfoSection'


const ProductDetailsSection = () => {

  return (
      <div className="mx-auto product-container">
        <div className="w-full grid grid-cols-1 gap-5 lg:gap-x-0 md:grid-cols-2">
          {/* Image gallery */}
         <ProductImageGallery />

          {/* Product info */}
        <ProductInfoSection  />
        </div>
      </div>
  )
}

export default ProductDetailsSection