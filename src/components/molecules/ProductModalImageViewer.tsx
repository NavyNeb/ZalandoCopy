import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { classNames } from "@/lib/utils";

type Props = {
  images: string[];
  currentImageIndex: number;
  setCurrentImageIndex: (index: number) => void;
  onClose: () => void;
  onForwardClick: () => void;
  onBackwardClick: () => void;
  isExpanded: boolean;
};

const ProductModalImageViewer: React.FC<Props> = ({
  currentImageIndex,
  setCurrentImageIndex,
  images,
  onClose,
  isExpanded,
  onBackwardClick,
  onForwardClick,
}) => {
  return (
    <AnimatePresence>
      {isExpanded && (
        <motion.div
          exit={{ y: 1000, opacity: 0 }}
          initial={{ y: -1000, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-white flex flex-col items-center"
        >
          {/* Image selector */}
          <div className="hidden lg:flex lg:w-24 flex-col items-center justify-start gap-y-3 absolute left-4 top-3 z-10">
            {images.map((image, index: number) => (
              <div
                className={classNames(
                  "h-auto w-full hover:right-1 hover:ring-black",
                  "cursor-pointer",
                  index === currentImageIndex ? "ring-2 ring-black" : "" // Highlight the currently selected image
                )}
              >
                <img
                  className={classNames(
                    "w-full h-full object-fill object-center"
                  )}
                  src={image}
                  alt="Product image"
                  onMouseOver={() => setCurrentImageIndex(index)}
                />
              </div>
            ))}
          </div>
          {/* Main image view */}
          {/* <div className="absolute top-0 h-full w-full box-border whitespace-nowrap"> */}
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            src={images[currentImageIndex]}
            alt="Product image"
            className="object-fill object-center w-full h-full min-w-full md:min-w-[1090px] max-w-7xl"
          />
          {/* </div> */}

          {/* Close button */}
          <div className="absolute top-2 right-2 hidden lg:block">
            <Button size={"icon"} variant={"outline"} onClick={onClose}>
              <span>
                <X size={24} className="h-12 w-12" />
              </span>
            </Button>
          </div>

          {/* Responsive bottom controls */}

          {
            <motion.div className="flex justify-between items-center absolute z-10 bottom-0 w-full h-[72px] px-6 bg-white lg:hidden">
              <div className="sm-normal-text">
                <span>
                  {currentImageIndex + 1} de {images.length}
                </span>
              </div>
              <div className="flex items-center justify-center gap-x-3">
                {/* Previous image button */}
                <button onClick={onBackwardClick}>
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
                </button>

                {/* Next image button */}
                <button onClick={onForwardClick}>
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
                </button>

                {/* Close button */}
                <button onClick={onForwardClick}>
                  <X size={24} className="ml-3" />
                </button>
              </div>
            </motion.div>
          }
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductModalImageViewer;
