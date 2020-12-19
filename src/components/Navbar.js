import React, {Component} from 'react';
import Sticky from 'react-stickynode';
import {Link} from 'react-scroll';

class Navbar extends Component {
    render() {
        let {mainlogo, stickylogo} = this.props;
        return (
            <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
                <nav className="navbar navbar-expand-lg navbar-light menu_two">
                    <div className="container">
                        <span className="navbar-brand logo_h">
                            <img src={require("../image/" + mainlogo)} alt="SecAI"/>
                            <img src={require("../image/" + stickylogo)} alt="SecAI"/>
                        </span>
                        <a href="Navbar" className="btn get-btn get-btn-two d-lg-none d-md-block login">Login</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                            <ul className="nav navbar-nav m-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" activeClass="active" to="home" spy={true} smooth={true}
                                          offset={0} duration={500}>
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" activeClass="active" to="about" spy={true} smooth={true}
                                          offset={0} duration={500}>
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" activeClass="active" to="service" spy={true}
                                          smooth={true} offset={-86} duration={500}>
                                        SECAI
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" activeClass="active" to="demo" spy={true}
                                          smooth={true} offset={-86} duration={500}>
                                        DEMO
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" activeClass="active" to="skill" spy={true} smooth={true}
                                          offset={-86} duration={500}>
                                        Stats
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" activeClass="active" to="testimonial" spy={true}
                                          smooth={true} offset={-86} duration={500}>
                                        Testimonials
                                    </Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link" activeClass="active" to="clients" spy={true}
                                          smooth={true} offset={-86} duration={500}>
                                        Clients
                                    </Link>
                                </li> */}
                                <li className="nav-item">
                                    <Link className="nav-link" activeClass="active" to="contacts" spy={true}
                                          smooth={true} offset={-86} duration={500}>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </Sticky>
        );
    }
}

export default Navbar;
