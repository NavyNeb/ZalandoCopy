import HeartIcon from '../atoms/HeartIcon'

type Props = {
    product: any
}

const ProductMain = ({ product }: Props) => {
  return (
    <li
              key={product.id}
              className="min-w-[384px] md:min-w-[390px] lg:min-w-96 basis-[33.333%] overflow-hidden relative bg-transparent"
            >
              <article>
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-w-full bg-transparent object-cover object-center"
                />
                <div className="bg-transparent">
                  <h3 className="sm-normal-text mt-2">{product.name}</h3>
                </div>
                <div className="bg-white h-10 w-10 p-2 flex items-center justify-center absolute right-0 top-2">
                  <HeartIcon />
                </div>
              </article>
            </li>
  )
}

export default ProductMain