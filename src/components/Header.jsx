import React, {useState} from "react";

import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FiGithub, FiLinkedin, FiFacebook} from "react-icons/fi";
import {  FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { SiGmail } from "react-icons/si";

import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css"

const Header = () => {



    const [menuCollapse, setMenuCollapse] = useState(false)

    const menuIconCLick = () => {
        menuCollapse ? setMenuCollapse(false): setMenuCollapse(true)
    }


    let isSubmissionOpen = false;
    const emailSubmit = () => {
        if (isSubmissionOpen === false) {
            isSubmissionOpen = true;
        } else {
            isSubmissionOpen = true;
        }
    }

    return (
        <>
            <div id="header">
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className="logtext">
                            <p> {menuCollapse ? "Media": "About me"}</p>
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
                                <a href={"https://www.facebook.com/"} className="links">
                                    Facebook
                                </a>
                            </MenuItem>
                            <MenuItem active={true} icon={<SiGmail />}>
                                <div onClick={emailSubmit}>
                                </div>
                                Email me
                            </MenuItem>
                        </Menu>
                    </SidebarContent>
                </ProSidebar>
            </div>
        </>

    )

}

Header.prototype = {
}

export default Header