import { classNames } from '@/lib/utils';
import { motion } from 'framer-motion';
import { HeaderLinksType } from "types";


type Props = {
    lable: string;
    path: string;
    setActive: (val: HeaderLinksType)=> void;
    active: HeaderLinksType;
}

const HeaderLinkItem = ({ active, lable, setActive, path }: Props) => {
  const isActive = active.title === lable;
    
  return (
    <motion.button onClick={()=> setActive({ title: lable, path })} className={classNames(
      `font-helveticaBold px-4 py-2 hover:bg-[#00000015]`,
      isActive ? 'text-white bg-black' : 'text-black bg-transparent'
  )} >
        {lable}
    </motion.button>
  )
}

export default HeaderLinkItem