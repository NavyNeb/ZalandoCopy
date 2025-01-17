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
    <div className="product-container mb-0 w-full flex flex-col items-end" >
      <div className="mt-6 w-full lg:w-[81.66666%] sm:mt-0 space-y-10 ">
        {/* Product title and Price section */}
        <div className="" >
          <h1 className="text-xl lg:text-[1.75em] leading-none font-tiemposLight tracking-tight text-black">
            Nike
          </h1>

          <div className="mt-1">
            <span className="sr-only">Product information</span>
            <p className="text-xl lg:text-[1.75em] leading-none tracking-tight text-black font-helveticaBold font-bold m-0">
              Classic Nice Shoe - Dark white
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
        <div className="space-y-2 ">
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
              "flex items-center justify-between flex-1 w-full h-14 py-4 px-6 md:px-2 border-t border-b border-border-secondary"
            )}
          >
            <span className="sm-bold-text ">Nike</span>
            <Button variant={"outline"} size={"icon"} className="w-fit px-2 h-10">
              <Plus />
              Suivre
            </Button>
          </button>
          <div className="sm-normal-text text-text-interactive px-6 flex items-center gap-x-2 my-5 md:px-0 hover:underline" >
            <FlagIcon className="text-text-interactive h-4 w-4" /> Signaler un problème d'ordre juridique
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoSection;
