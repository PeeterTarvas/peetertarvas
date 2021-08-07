import React, {useEffect, useState} from "react";
import {Link} from 'react-scroll'


import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarContent,
} from "react-pro-sidebar";


//import icons from react icons
import { FiGithub, FiLinkedin, FiFacebook, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { SiGmail } from "react-icons/si";

import PropTypes from 'prop-types'

import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css"

export const Header = ({isSubmitBoxOpen}) => {



    const [menuCollapse, setMenuCollapse] = useState(false)

    const menuIconCLick = (event) => {
        menuCollapse ? setMenuCollapse(false): setMenuCollapse(true)
    }

    const [scrolled, setScrolled] = useState(false)

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    let navbarClasses=['navbar'];
    if (scrolled) {
        navbarClasses.push('scrolled');
    }


    return (
            <div id="header" className={navbarClasses.join(" ")}>
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className="logtext">
                            <p> {menuCollapse ? "Media": "Media"}</p>
                        </div>
                        <div className="closemenu" onClick={menuIconCLick}>
                            {menuCollapse ? (
                                <FiArrowRightCircle/>
                            ) : (
                                <FiArrowLeftCircle/>
                            )}
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape={"square"}>
                            <MenuItem active={true} icon={<FiGithub />}>
                                <a href={"https://github.com/PeeterTarvas"} className="links">
                                    Github
                                </a>
                            </MenuItem>
                            <MenuItem active={true} icon={<FiLinkedin />}>
                                <a href={"https://www.linkedin.com/in/peeter-tarvas-690a58171/"} className="links">
                                    Linkedin
                                </a>
                            </MenuItem>
                            <MenuItem active={true} icon={<FiFacebook />}>
                                <a href={"https://www.facebook.com/peeter.tarvas/"} className="links">
                                    Facebook
                                </a>
                            </MenuItem>
                            <MenuItem active={true} icon={<SiGmail />}>
                                    <div>
                                        <Link to={'contact'} activeClass={'active'} spy={true} smooth={true}>
                                            Email me
                                        </Link>
                                    </div>
                            </MenuItem>
                        </Menu>
                    </SidebarContent>
                </ProSidebar>
            </div>

    )

}

Header.defaultProps = {
    isSubmitBoxOpen: false
}

Header.propTypes = {
    isSubmitBoxOpen: PropTypes.bool,
}


