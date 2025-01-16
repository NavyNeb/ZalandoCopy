import ProductImageVariants from "./ProductImageVariants";
import Tips from "../molecules/Tips";
import RecommendationIcon from "../atoms/RecommendationIcon";
import ProductCTA from "../molecules/ProductCTA";
import FireIcon from "../atoms/FireIcon";
import ProductSizeSelect from "../molecules/ProductSizeSelect";
import ProductMaterials from "../molecules/ProductMaterials";
import ProductDelivery from "./ProductDelivery";
import ProductInfos from "../molecules/ProductInfo";
import { classNames } from "@/lib/utils";
import { Button } from "../ui/button";
import { FlagIcon, Plus } from "lucide-react";

const ProductInfoSection = () => {
  return (
    <div className="mt-10 space-y-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
      {/* Product title and Price section */}
      <div>
        <h1 className="text-[1.75rem] leading-none font-tiemposLight tracking-tight text-black">
          Anna Field
        </h1>

        <div className="mt-1">
          <span className="sr-only">Product information</span>
          <p className="text-[1.75rem] leading-none tracking-tight text-black font-helveticaBold font-bold m-0">
            Pantalon classique - dark grey
          </p>
        </div>

        <div className="mt-3">
          <span className="sr-only">Price</span>
          <div className="flex flex-row items-end justify-start space-x-2">
            <p className="text-[1.375rem] tracking-tight text-black font-helveticaRegular font-bold m-0">
              44,99 €
            </p>
            <span className="text-[0.875rem] tracking-tight text-[#66676e] font-helveticaRegular font-bold pb-1">
              TVA incluse
            </span>
          </div>
        </div>
      </div>

      {/* Product image variants sections */}
      <ProductImageVariants />

      {/* Product CTA section */}
      <div className="space-y-2">
        <Tips
          title="Vous n'êtes pas sûr·e de votre taille ?"
          icon={<RecommendationIcon />}
          message="Obtenir une recommandation de taille"
        />
        <ProductSizeSelect />
        <ProductCTA />
        <Tips
          title="C'est l'un de nos articles les plus populaires ce mois-ci."
          icon={<FireIcon />}
          variants="greyed"
        />
      </div>

      {/* Product material section */}
      <ProductMaterials />

      {/* Product delivery section */}
      <ProductDelivery />

      {/* Product additional information section */}
      <div className="">
        <ProductInfos
          description={`Article intégral: 50% matériau recyclé
          Ce que nous savons: la marque a déclaré utiliser une norme de recyclage indépendante

          Cet article contient des matériaux recyclés qui, autrement, finiraient en déchets. Cela permet de réduire la demande de matières premières et de préserver les ressources naturelles.`}
        />
        <ProductInfos
          description={`Article intégral: 50% matériau recyclé
          Ce que nous savons: la marque a déclaré utiliser une norme de recyclage indépendante

          Cet article contient des matériaux recyclés qui, autrement, finiraient en déchets. Cela permet de réduire la demande de matières premières et de préserver les ressources naturelles.`}
        />
        <button
          className={classNames(
            "flex items-center justify-between flex-1 w-full h-14 py-4 px-2 border-t border-b border-border-secondary"
          )}
        >
          <span className="sm-bold-text ">Anna Field</span>
          <Button variant={"outline"} size={"icon"} className="w-fit px-2 h-10">
            <Plus />
            Suivre
          </Button>
        </button>
        <div className="sm-normal-text text-text-interactive flex items-center gap-x-2 my-5 hover:underline" >
          <FlagIcon className="text-text-interactive h-4 w-4" /> Signaler un problème d'ordre juridique
        </div>
      </div>
    </div>
  );
};

export default ProductInfoSection;
