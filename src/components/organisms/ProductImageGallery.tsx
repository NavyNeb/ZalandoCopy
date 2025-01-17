import image1 from "@/assets/images/shoes.jpg";
import image2 from "@/assets/images/shoes2.jpg";
import image3 from "@/assets/images/shoes3.jpg";
import { classNames } from "@/lib/utils";
import { useState } from "react";
import { Button } from "../ui/button";
import LikeButton from "../molecules/LikeButton";
// import {
//   SideBySideMagnifier,
//   Magnifier
// } from "react-image-magnifiers";
import ProductModalImageViewer from "../molecules/ProductModalImageViewer";

const ProductImageGallery = () => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [expanded, setExpanded] = useState<boolean>(false);
  const productImages = [
    image1,
    image2,
    image3,
    // Add more images as needed
  ];

  const incrementImage = () => {
    setCurrentImage((prev) =>
      prev === productImages.length - 1 ? 0 : prev + 1
    );
  };

  const decrementImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? productImages.length - 1 : prev - 1
    );
  };

  return (
    <>
      <div className="sticky flex items-start justify-start gap-x-3 flex-1 md:w-full">
        {/* Image selector */}
        <div className="hidden lg:flex lg:w-[14.66667%] flex-col items-center justify-start gap-y-3">
          {productImages.map((image, index: number) => (
            <div
              className={classNames(
                "h-auto w-full hover:right-1 hover:ring-black",
                "cursor-pointer",
                index === currentImage ? "ring-2 ring-black" : "" // Highlight the currently selected image
              )}
            >
              <img
                className={classNames(
                  "w-full h-full object-fill object-center"
                )}
                src={image}
                alt="Product image"
                onMouseOver={() => setCurrentImage(index)}
              />
            </div>
          ))}
        </div>
        <div
          onClick={() => setExpanded(true)}
          className="flex-1 md:w-[83.33333%] flex flex-col items-start justify-start "
        >
          <div className="h-[768px] md:h-auto w-full relative">
            <img
              src={productImages[currentImage]}
              className="w-full h-full object-cover object-center cursor-crosshair"
              alt="Product image"
            />
            {/* <SideBySideMagnifier
            imageSrc={productImages[currentImage]}
            alwaysInPlace={false}
            fillAvailableSpace={true}
            imageAlt="Product image main"

          /> */}
            {/* Left Icon */}
            {currentImage !== 0 && (
              <Button
                onClick={decrementImage}
                variant={"outline"}
                size={"icon"}
                className="absolute inset-y-[45%] flex lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </Button>
            )}

            {/* Right Icon */}
            {currentImage !== 2 && (
              <Button
                onClick={incrementImage}
                variant={"outline"}
                size={"icon"}
                className="absolute inset-y-[45%] right-0 flex lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Button>
            )}
            <div className="block md:hidden" >
              <LikeButton />
            </div>
          </div>
        </div>
      </div>
      <ProductModalImageViewer
        onBackwardClick={decrementImage}
        onForwardClick={incrementImage}
        isExpanded={expanded}
        images={productImages}
        currentImageIndex={currentImage}
        setCurrentImageIndex={setCurrentImage}
        onClose={() => setExpanded(false)}
      />
    </>
  );
};

export default ProductImageGallery;
