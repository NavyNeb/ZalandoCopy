import { motion } from 'framer-motion';
import React from 'react'

type Props = {
    lable: string;
    path: string;
    active: boolean;
    animated?: boolean;
}

const HeaderLinkItem = ({ active, lable, animated }: Props) => {

    const _handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
    }
  return (
    <motion.button whileHover={{scale: animated ? 1.1 : 1 }} onClick={_handleClick} className={`font-poppinsMedium bg-transparent px-3 ${ animated ? 'text-6xl' : 'text-base' } ${active ? 'text-primary' : 'text-appNeutral-400'} hover:text-primary`} >
        {lable}
    </motion.button>
  )
}

export default HeaderLinkItem