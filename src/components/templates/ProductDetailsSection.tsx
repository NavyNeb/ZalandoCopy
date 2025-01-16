import ProductImageGallery from '../organisms/ProductImageGallery'
import ProductInfoSection from '../organisms/ProductInfoSection'

const product = {
  name: 'Zip Tote Basket',
  price: '$140',
  rating: 4,
  images: [
    {
      id: 1,
      name: 'Angled view',
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    // More images...
  ],
  colors: [
    { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
    { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
    { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
  ],
  description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
  details: [
    {
      name: 'Features',
      items: [
        'Multiple strap configurations',
        'Spacious interior with top zip',
        'Leather handle and tabs',
        'Interior dividers',
        'Stainless strap loops',
        'Double stitched construction',
        'Water-resistant',
      ],
    },
    // More sections...
  ],
}
type Props = {}

const ProductDetailsSection = (props: Props) => {

  return (
    <div className="bg-white">
      <div className="mx-auto w-full px-6 py-16 sm:py-24 lg:max-w-7xl">
        <div className="md:grid md:grid-cols-2 md:items-start md:gap-x-3 lg:gap-x-8">
          {/* Image gallery */}
         <ProductImageGallery product={product} />

          {/* Product info */}
        <ProductInfoSection  />
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsSection