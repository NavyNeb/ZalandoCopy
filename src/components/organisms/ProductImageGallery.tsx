import image1 from "@/assets/images/shoes.jpg";
import image2 from "@/assets/images/shoes2.jpg";
import image3 from "@/assets/images/shoes3.jpg";
import { classNames } from "@/lib/utils";
import { useState } from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductImageGallery = () => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const productImages = [
    image1,
    image2,
    image3,
    // Add more images as needed
  ];

  const incrementImage = ()=> {
    setCurrentImage((prev) => (prev === productImages.length - 1? 0 : prev + 1));
  }

  const decrementImage = ()=> {
    setCurrentImage((prev) => (prev === 0? productImages.length - 1 : prev - 1));
  }

  return (
    <div className="flex items-start justify-start gap-x-3 flex-1 w-full">
      {/* Image selector */}
      <div className="hidden lg:flex flex-col items-center justify-start gap-y-3">
        {productImages.map((image, index: number) => (
          <div
            className={classNames(
              "hover:right-1 hover:ring-black",
              "cursor-pointer",
              index === currentImage ? "ring-2 ring-black" : "" // Highlight the currently selected image
            )}
          >
            <img
              className={classNames(
                "w-20 h-[122px] object-cover object-center"
              )}
              src={image}
              alt="Product image"
              onMouseOver={() => setCurrentImage(index)}
            />
          </div>
        ))}
      </div>
      <div className="flex-1 flex flex-col items-start justify-start bg-re">
        <div className="h-[780px] w-[100%] lg:w-[85%] lg:min-w-[456px] lg:h-[756px] relative">
          <img
            src={productImages[currentImage]}
            className="w-full h-full object-cover object-center"
            alt="Product image"
          />
          {/* Left Icon */}
          { currentImage !== 0 && <Button onClick={decrementImage} variant={"outline"} size={"icon"} className="absolute inset-y-[45%] flex lg:hidden" >
            <ChevronLeft size={32} className="w-12 h-12" />
          </Button>}

            {/* Right Icon */}
            <Button onClick={incrementImage} variant={"outline"} size={"icon"} className="absolute inset-y-[45%] right-0 flex lg:hidden" >
            <ChevronRight size={32} className="w-12 h-12" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductImageGallery;
