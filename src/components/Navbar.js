import React from "react"
import companyLogo from '../assets/images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <div class="main-header header-fixed-default">
            <nav class="navbar container w-100 navbar-expand-lg navbar-transparent">
                <div class="logo">
                    <a href="#"><img style={{ width: '150px', height: '48px' }} className='' src={companyLogo} /></a>
                </div>
                <div class="menu-toggle navbar-toggler mr-1" role="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div class="collapse navbar-collapse">
                    <div style={{ margin: 'auto' }} ></div>
                    <div class="header-part-right">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="scroll-to nav-link m-2" href="#" target="_self">Home <span
                                    class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="scroll-to nav-link m-2 m-2">Products &nbsp;<FontAwesomeIcon icon={faAngleDown} />
                                </a>
                                <ul>
                                    <li class="nav-item">
                                        <a href="#" target="_self" class=""> Infraon
                                            SecuRA</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" target="_self">Infraon Assets</a>
                                    </li>
                                    <li class="mb-2">
                                        <a href="#" target="_self">Infraon Desk</a>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <a href="#" class="scroll-to nav-link m-2 m-2">Resources &nbsp;<FontAwesomeIcon icon={faAngleDown} /></a>
                                <ul>
                                    <li class="nav-item">
                                        <a href="#" target="_self">Success Stories</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" target="_self">Videos </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="scroll-to nav-link m-2 m-2">Support &nbsp;<FontAwesomeIcon icon={faAngleDown} /></a>
                                <ul>
                                    <li class="nav-item">
                                        <a href="#" target="_self">Help and Support</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item pt-2">
                                <a class="nav-link" href="#" target="_blank">Company</a>
                            </li>
                            <li class="nav-item pad-top">
                                <a href="#" data-cb-type="portal"
                                    class="btn half-button text-white float-right btn-login"><span class="link-log">Login</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar