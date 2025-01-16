import LikeButton from './LikeButton'

type Props = {
    product: any
}

const ProductMain = ({ product }: Props) => {
  return (
    <li
              key={product.id}
              className="w-[50%] basis-[50%] xl:w-[33.3333%] xl:basis-[33.3333%] shrink-0 snap-start snap-always overflow-hidden relative bg-transparent"
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
                <LikeButton />
              </article>
            </li>
  )
}

export default ProductMain