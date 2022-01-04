import React, {FC, useEffect, useState} from 'react';
import {Squeeze as Hamburger} from 'hamburger-react';
import './header.scss';
import icons from "../../assets/images/icons";
import Menu from "../Menu/Menu";
import useWindowSize from "../../hooks/useWindowSize";
import {Link} from "react-router-dom";

const Header: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isOpen, setOpen] = useState<boolean>(false);
    const sizes = useWindowSize()
    const [isDesktop, setIsDesktop] = useState<boolean>(sizes.width >= 768);

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
                <Link to="/books">
                    <img src={icons.logo} alt="logo"/>
                </Link>
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