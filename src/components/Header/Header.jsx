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
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

export const Header = ({isSubmitBoxOpen}) => {



    const [menuCollapse, setMenuCollapse] = useState(true)



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




    return (
        <Navbar className={'navbar w-100'}>
            <Container className={'d-flex w-50 align-items-end'} >
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto  my-lg-0"
                     style={{ maxHeight: '100px' }}
                     navbarScroll>
                    <NavDropdown title={<span className="text-white w-30">Media</span>} id="basic-nav-dropdown">
                        <NavDropdown.Item href="https://www.facebook.com/peeter.tarvas/">Facebook</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="https://www.instagram.com/ptr.trvs/">Instagram</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="https://github.com/PeeterTarvas">Github</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="https://www.linkedin.com/in/peeter-tarvas-690a58171/">Linkedin</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>


    )

}

Header.defaultProps = {
    isSubmitBoxOpen: false
}

Header.propTypes = {
    isSubmitBoxOpen: PropTypes.bool,
}


