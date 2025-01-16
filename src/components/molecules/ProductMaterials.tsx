import { MATERIAL_DATA } from '@/data'
import ProductMaterialItem from '../atoms/ProductMaterialItem'


const ProductMaterials = () => {
  return (
    <div className='w-full my-5 ' >
        <p className='text-black text-sm font-helveticaRegular' >Ce produit conteint 50%</p>
        <ul className='flex items-center justify-start gap-x-2 gap-y-3 flex-wrap w-full my-4' >
            {
                MATERIAL_DATA.map((material: string, id: number) => <ProductMaterialItem title={material} key={material+id} /> )
            }
        </ul>
        <p className='text-text-interactive text-sm font-helveticaBold' >Plus d'infos</p>
    </div>
  )
}

export default ProductMaterials