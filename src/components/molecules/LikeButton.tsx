import { motion } from "framer-motion";
import React, { useState } from "react";

type Props = {};

const LikeButton = (props: Props) => {
  const [isFav, setIsFav] = useState<boolean>(false);

  const handleClick = ()=> {
    setIsFav((prev) =>!prev);
  } 

  return (
    <button onClick={handleClick} className="bg-white absolute h-10 w-10 flex items-center justify-center right-0 top-2 md:hidden">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill={isFav ? "#ff4c00" : "none"}
        
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </motion.svg>
    </button>
  );
};

export default LikeButton;
