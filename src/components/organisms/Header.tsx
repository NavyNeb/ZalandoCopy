import {
  useAnimate,
  motion,
  stagger
} from "framer-motion";
import logo from "../../assets/app_logo.svg";
import HeaderLinks from "../molecules/HeaderLinks";
import { useEffect, useState } from "react";
import BurgerMenuButton from "../atoms/BurgerMenuButton";
import { Button } from "../ui/button";
import { HEADER_LINKS } from "@/data";
import HeaderLinkItem from "../atoms/HeaderLinkItem";

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isOpen) {
      animate([
        [
          "divContainer",
          { transform: "translateX(0%)", opacity: 1 },
          { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
        ],
        [
          "nav.menu",
          { transform: "translateX(0%)", opacity: 1 },
          { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
        ],
        [
          "li",
          { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
          { delay: stagger(0.05), at: "-0.1" },
        ],
      ]);
    } else {
      animate([
        [
          "li",
          { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
          { delay: stagger(0.05, { from: "last" }), at: "<" },
        ],
        [
          "nav.menu",
          { transform: "translateX(-100%)", opacity: 0 },
          { at: "-0.1" },
        ],
        [
          "divContainer",
          { transform: "translateX(-100%)", opacity: 0 },
          { at: "<" },
        ],
      ]);
    }
    // animate(menuAnimations);
  }, [isOpen]);

  return scope;
}

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    setIsOpen((prev) => !prev);
  };

  console.log("isOpen", isOpen);

  const scope = useMenuAnimation(isOpen);
  return (
    <header className="h-[122px] w-screen">
      <nav className="mx-auto h-full flex flex-row items-center justify-between px-6 sm:px-8 lg:px-16">
        <img src={logo} className="h-[40px] w-32 object-contain " />
        <HeaderLinks />
        <BurgerMenuButton
          isOpen={isOpen}
          toggle={(e: React.MouseEvent<HTMLButtonElement>) =>
            handleMenuClick(e)
          }
        />
      </nav>
      <motion.div
        ref={scope}
        variants={{
          open: {
            transform: "translateX(0%)",
            opacity: 1,
          },
          closed: {
            transform: "translateX(100%)",
            opacity: 0,
            transition: {
              delay: 0.7,
            },
          },
        }}
        animate={isOpen ? "open" : "closed"}
        className={`divContainer flex h-[calc(100vh-122px)] flex-col items-center w-full md:hidden bg-emerald-100`}
      >
          {(
            <motion.nav key={"menu"} exit={{ transform: "translateX(-100%)", opacity: 0 }} className="menu">
              <ul className="inline-flex flex-col justify-center items-center space-y-6 mt-[70px] mx-auto">
                {HEADER_LINKS.map(({ title, path }, index) => (
                  <li  key={index}>
                    <HeaderLinkItem
                      active={index === 0}
                      key={index}
                      lable={title}
                      path={path}
                      animated
                    />
                  </li>
                ))}

                <li className="text-center">
                  <Button>Order Now</Button>
                </li>
              </ul>
            </motion.nav>
          )}
      </motion.div>
    </header>
  );
};

export default Header;
