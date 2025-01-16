import { classNames } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

type Props = {
  title?: string;
  description?: string | React.ReactNode;
}

const ProductInfos = ({ title="Title de la section", description="Lorem ipsum sit dolor immet is just a dummy text from the textile" }: Props) => {
 const [open, setOpen] = useState<boolean>(false)

 const toggleOpen = () => setOpen((prev) => !prev);

 const variants = {
  open: { opacity: 1, height: 'auto' },
  closed: { opacity: 0, height: 0 }
};

  return (
    <div className="relative">
      <button
        onClick={toggleOpen}
        className={classNames(
          "flex items-center justify-between flex-1 w-full h-14 py-4 px-2 border-t border-border-secondary hover:border-b-0 hover:ring-1 hover:ring-black hover:bg-[#00000033]" )}
      >
        <span className="sm-bold-text ">
          {title}
        </span>
        {open ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
      </button>
      <motion.div
        className="accordion-content overflow-hidden"
        initial="closed"
        animate={open ? 'open' : 'closed'}
        variants={variants}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 py-5 sm-normal-text text-left">
          {description}
        </div>
      </motion.div>
    </div>
  );
};

export default ProductInfos;
