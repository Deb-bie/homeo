import React from "react";
import styled from "styled-components";
// import { HamburgerMenu } from "../hamburgerMenu";

import { MdClose } from "react-icons/md";
import { FaBars } from "react-icons/fa"
import { motion } from "framer-motion";
import { useState } from "react";
// import { MenuToggle } from "./menuToggle";
// import { NavMenu } from "./navMenu";














const NavbarContainer = styled.div`
  width: 100%;
  height: 55px;
  border-bottom: 1px solid #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 1.5em;
  justify-content: space-between;
`;




const HamburgerMenuContainer = styled.div`
  display: flex;
`;

const HamburgerIcon = styled.div`
  color: ${({ reverseColor }) => (reverseColor ? "#000" : "#fff")};
  cursor: pointer;
  z-index: 99;
  transition: all 250ms ease-in-out;
`;

const MenuContainer = styled(motion.div)`
  min-width: 300px;
  width: 100%;
  max-width: 44%;
  height: 100%;
  background-color: #fff;
  box-shadow: -2px 0 2px rgba(15, 15, 15, 0.3);
  z-index: 90;
  position: fixed;
  top: 0;
//   right: 0;
left: 0;
//   transform: translateX(4em);
//   user-select: none;
  padding: 1em 2.5em;
`;

const TopContainer = styled.div`
  display: flex;
  width: 100%;
`;

const IconContainer = styled.div`
  font-size: 16px;
  color: #555;
  padding-right: 5px;
`;

const LoginButton = styled(motion.button)`
  border: 0;
  background: transparent;
  color: #555;
  font-size: 14px;
  font-weight: 900;
  transition: all 250ms ease-in-out;
  display: flex;
  cursor: pointer;
  padding: 5px 12px;
  &:hover {
    color: #666;
  }
  &:focus {
    outline: none;
  }
  &:not(:last-of-type) {
    border-right: 1px solid #b4b4b4;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`;

const menuVariants = {
  open: {
    transform: "translateX(-3%)",
  },
  closed: {
    transform: "translateX(-103%)",
  },
};

const menuTransition = {
  type: "spring",
  duration: 1,
  stiffness: 33,
  delay: 0.1,
};

const commonVariants = {
  show: {
    transform: "translateX(0em)",
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.01,
    },
  },
  hide: {
    transform: "translateX(5em)",
    opacity: 0,
  },
};

const commonTransition = { type: "spring", duration: 0.05 };



const NavMenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const NavList = styled.ul`
  padding: 0 0.8em;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const NavLink = styled(motion.li)`
  font-weight: 600;
  height: 42px;
  display: flex;
  align-items: center;
  cursor: pointer;
  a {
    text-decoration: none;
    color: #444;
    font-size: 20px;
    transition: all 200ms ease-in-out;
  }
  &:hover {
    a {
      color: #555;
    }
  }
`;

const variants = {
  show: {
    transform: "translateX(0em)",
    opacity: 1,
  },
  hide: {
    transform: "translateX(5em)",
    opacity: 0,
  },
};

const Button = styled.div`
  z-index: 99;
  cursor: pointer;
`;

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeLinecap="round"
    strokeWidth="3"
    {...props}
  />
);

const transition = { duration: 0.3 };













export default function Navbar(props) {

    const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => {
      setOpen(!isOpen);
    };


  return (
    <NavbarContainer>
        
        <HamburgerMenuContainer>

        {/* <MenuToggle toggle={toggleMenu} isOpen={isOpen} /> */}


        <Button onClick={() =>toggleMenu()}>
            <svg width="23" height="23" viewBox="0 0 23 23">
                <Path
                animate={isOpen ? "open" : "closed"}
                initial={false}
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5", stroke: "hsl(0, 0%, 100%)" },
                    open: { d: "M 3 16.5 L 17 2.5", stroke: "hsl(0, 0%, 18%)" },
                }}
                transition={transition}
                />
                <Path
                d="M 2 9.423 L 20 9.423"
                stroke="hsl(0, 0%, 100%)"
                animate={isOpen ? "open" : "closed"}
                initial={false}
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                }}
                transition={transition}
                />
                <Path
                animate={isOpen ? "open" : "closed"}
                initial={false}
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346", stroke: "hsl(0, 0%, 100%)" },
                    open: { d: "M 3 2.5 L 17 16.346", stroke: "hsl(0, 0%, 18%)" },
                }}
                transition={transition}
                />
            </svg>
        </Button>


        <MenuContainer
            initial={false}
            animate={isOpen ? "open" : "closed"}
            variants={menuVariants}
            transition={menuTransition}
        >
            <TopContainer>

                <LoginButton
                    initial={false}
                    animate={isOpen ? "show" : "hide"}
                    variants={commonVariants}
                    transition={commonTransition}
                >
                    <IconContainer>
                        <FaBars />
                    </IconContainer>
                    LOGIN
                </LoginButton>

                <LoginButton
                    initial={false}
                    animate={isOpen ? "show" : "hide"}
                    variants={commonVariants}
                    transition={commonTransition}
                >
                    JOIN US
                </LoginButton>

            </TopContainer>

            <ContentContainer>
                {/* <NavMenu isOpen={isOpen} /> */}


                <NavMenuContainer>
                    <NavList>
                        <NavLink
                        initial={false}
                        animate={isOpen ? "show" : "hide"}
                        variants={{
                            show: {
                            ...variants.show,
                            transition: { delay: 0.3, duration: 0.2 },
                            },
                            hide: {
                            ...variants.hide,
                            transition: { delay: 0.05, duration: 0.05 },
                            },
                        }}
                        >
                        <a href="#">Home</a>
                        </NavLink>
                        <NavLink
                        initial={false}
                        animate={isOpen ? "show" : "hide"}
                        variants={{
                            show: {
                            ...variants.show,
                            transition: { delay: 0.4, duration: 0.2 },
                            },
                            hide: {
                            ...variants.hide,
                            transition: { delay: 0.1, duration: 0.05 },
                            },
                        }}
                        >
                        <a href="#">Products</a>
                        </NavLink>
                        <NavLink
                        initial={false}
                        animate={isOpen ? "show" : "hide"}
                        variants={{
                            show: {
                            ...variants.show,
                            transition: { delay: 0.5, duration: 0.2 },
                            },
                            hide: {
                            ...variants.hide,
                            transition: { delay: 0.15, duration: 0.05 },
                            },
                        }}
                        >
                        <a href="#">Key Benefits</a>
                        </NavLink>
                        <NavLink
                        initial={false}
                        animate={isOpen ? "show" : "hide"}
                        variants={{
                            show: {
                            ...variants.show,
                            transition: { delay: 0.6, duration: 0.2 },
                            },
                            hide: {
                            ...variants.hide,
                            transition: { delay: 0.2, duration: 0.05 },
                            },
                        }}
                        >
                        <a href="#">About</a>
                        </NavLink>
                        <NavLink
                        initial={false}
                        animate={isOpen ? "show" : "hide"}
                        variants={{
                            show: {
                            ...variants.show,
                            transition: { delay: 0.7, duration: 0.2 },
                            },
                            hide: {
                            ...variants.hide,
                            transition: { delay: 0.25, duration: 0.05 },
                            },
                        }}
                        >
                        <a href="#">FAQ</a>
                        </NavLink>
                        <NavLink
                        initial={false}
                        animate={isOpen ? "show" : "hide"}
                        variants={{
                            show: {
                            ...variants.show,
                            transition: { delay: 0.8, duration: 0.2 },
                            },
                            hide: {
                            ...variants.hide,
                            transition: { delay: 0.3, duration: 0.05 },
                            },
                        }}
                        >
                        <a href="#">Contact</a>
                        </NavLink>
                    </NavList>
                </NavMenuContainer>





            </ContentContainer>

        </MenuContainer>

        </HamburgerMenuContainer>

        <div className="flex text-white">Logo</div>
    </NavbarContainer>
)};