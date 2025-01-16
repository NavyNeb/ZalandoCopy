import { useState } from 'react'
import { Button } from '../ui/button'
import { HeartIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'

const ProductCTA = () => {
    const [isFav, setIsFav] = useState<boolean>(false);

    const toggleFav = () => {
        setIsFav((prev) => !prev);
    }
  return (
    <div className='flex items-center justify-center space-x-3' >
        <Button>
            Ajouter au panier
        </Button>
        <Button variant="outline" size={'icon'} onClick={toggleFav} className='hidden  items-center justify-center md:flex' >
           { !isFav ? <HeartIcon className="h-6 w-6" aria-hidden="true" /> :
            <HeartSolidIcon className="h-6 w-6 text-red-500" aria-hidden="true" /> } 
        </Button>
    </div>
  )
}

export default ProductCTA