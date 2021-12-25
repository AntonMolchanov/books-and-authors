import React, {useEffect, useState} from 'react';
import {Squeeze as Hamburger} from 'hamburger-react';
import './header.scss';
import icons from "../../assets/images/icons";
import Menu from "../Menu/Menu";
import useWindowSize from "../../hooks/useWindowSize";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const sizes = useWindowSize()
    const [isDesktop, setIsDesktop] = useState(sizes.width >= 768);

    useEffect(() => {
        setIsDesktop(sizes.width >= 768)
    }, [sizes])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setOpen(!isOpen)
    };

    return (
        <div className="header">
            <div className="wrapper header-container">
                {!isDesktop && <Hamburger toggled={isOpen} toggle={toggleMenu}/>}
                <img src={icons.logo} alt="logo"/>
                <Menu
                    open={isMenuOpen}
                    toggle={toggleMenu}
                    isDesktop={isDesktop}
                />
            </div>
        </div>
    );
};

export default Header;