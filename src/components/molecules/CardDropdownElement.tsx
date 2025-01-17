import { Button } from "../ui/button"


const CardDropdownElement = () => {
  return (
    <div className="w-[354px] pt-5  " >
        <p className="sm-bold-text text-center mb-1" >Votre panier est vide</p>
        <p className="sm-normal-text text-center my-4" >Remplissez-le avec la nouvelle collection</p>
        <div className = "bg-gray-300 flex-1 flex flex-col items-center justify-center w-full py-6 px-4" >
          <p className="sm-bold-text text-center mb-2 " >Votre panier est vide</p>
          <Button  >
            Voir les nouveautés
          </Button>
        </div>
    </div>
  )
}

export default CardDropdownElement