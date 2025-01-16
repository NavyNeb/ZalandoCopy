import { HEADER_LINKS } from "@/data";
import { useLocation } from "react-router";
import HeaderLinkItem from "../atoms/HeaderLinkItem";
import { Button } from "../ui/button";

type Props = {}

const HeaderLinks = (props: Props) => {
    // const { pathname } = useLocation();
  return (
    <div className='hidden md:flex flex-row items-center justify-center space-x-2' >
        {
            HEADER_LINKS.map(({ title, path }, index) => (
                <HeaderLinkItem active={index === 0} key={index} lable={title} path={path} />
            ))
        }
        <Button>Order Now</Button>
    </div>
  )
}

export default HeaderLinks