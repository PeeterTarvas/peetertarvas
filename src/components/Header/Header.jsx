import React, {useEffect, useState} from "react";
import {Link} from 'react-scroll'





//import icons from react icons
import {FiGithub, FiLinkedin, FiFacebook, FiArrowLeftCircle, FiArrowRightCircle, FiInstagram} from "react-icons/fi";
import {IoIosArrowDropdown} from "react-icons/io"

import PropTypes from 'prop-types'
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css"
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

export const Header = ({isSubmitBoxOpen}) => {



    const [show, setShow] = useState(false);
    const showDropdown = (e)=>{
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }



    const title = () => {
        return show ? <div style={{display: "inline-block"}}>Media <IoIosArrowDropdown/>  </div> :
            <div style={{display: "inline-block"}}> Media <IoIosArrowDropdown id={'arrow'}/></div>
    }



    return (
        <Navbar className={'navbar w-100'}>
            <Container className={'d-flex flex-row w-100'} >
                <Navbar.Collapse className="basic-navbar-nav d-flex justify-content-end">
                    <Nav className="me-auto ">
                        <NavDropdown show={show}
                                     onMouseEnter={showDropdown}
                                     onMouseLeave={hideDropdown}
                                     title={title()}
                                     color={'white'}
                                     id={'dropdown'}
                        >

                            <NavDropdown.Item href="https://www.facebook.com/peeter.tarvas/" className={'d-flex justify-content-start'}>
                                    <FiFacebook size={40}/>  <span className={'d-flex align-items-center m-2'}> Facebook</span>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://www.instagram.com/ptr.trvs/" className={'d-flex justify-content-start ml-2'}>
                                    <FiInstagram size={40}/> <span className={'d-flex align-items-center m-2'}> Instagram</span>

                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://github.com/PeeterTarvas" className={'d-flex justify-content-start'}>
                                    <FiGithub size={40}/><span className={'d-flex align-items-center m-2'}> Github</span>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://www.linkedin.com/in/peeter-tarvas-690a58171/" className={'d-flex justify-content-start'}>
                                    <FiLinkedin size={40}/><span className={'d-flex align-items-center m-2'}> Linkedin</span>
                            </NavDropdown.Item>
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


