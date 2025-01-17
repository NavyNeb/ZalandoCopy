import { HEADER_LINKS } from "@/data";
import HeaderLinkItem from "../atoms/HeaderLinkItem";
import { useState } from "react";
import { HeaderLinksType } from "types";

const HeaderLinks = () => {
  const [activeLink, setactiveLink] = useState(HEADER_LINKS[0]);

  const handleLinkClick = (link: HeaderLinksType) => {
    setactiveLink(link);
  }

  return (
    <div className='hidden md:flex flex-row items-center justify-center space-x-2' >
        {
            HEADER_LINKS.map(({ title, path }, index) => (
                <HeaderLinkItem setActive={handleLinkClick} active={activeLink} key={index} lable={title} path={path} />
            ))
        }
    </div>
  )
}

export default HeaderLinks