import { NavLink, Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <div className="as-menu-wrapper">
                <div className="as-menu-area text-center"><button className="as-menu-toggle"><i className="fal fa-times" /></button>
                    <div className="mobile-logo"><Link to={process.env.PUBLIC_URL+"/"} reloadDocument><img src={process.env.PUBLIC_URL+"/assets/img/logo.png"} alt="Taxseco" /></Link></div>
                    <div className="as-mobile-menu">
                        <ul>
                            <li>
                                <NavLink to={process.env.PUBLIC_URL+"/"} reloadDocument> Home </NavLink>
                            </li>
                            <li>
                                <NavLink to={process.env.PUBLIC_URL+"/Car-Travels-in-Guntur"}>About Us</NavLink>
                            </li>
                            <li>
                                <NavLink to={process.env.PUBLIC_URL+"/Guntur-Car-Travels-Rates"}>Our Cars & Tariff</NavLink>
                            </li>
                            <li>
                                <NavLink to={process.env.PUBLIC_URL+"/GalleryPage"}>Gallery</NavLink>
                            </li>
                            <li>
                                <NavLink to={process.env.PUBLIC_URL+"/Contact"}>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <header className="as-header header-layout1">
                <div className="header-top">
                    <div className="container">
                        <div className="row justify-content-center justify-content-md-between align-items-center gy-2">
                            <div className="col-auto d-none d-md-block">
                                <div className="header-links">
                                    <ul>
                                        <li><i className="far fa-phone" /><a href="tel:+919912898822">+91 99128 98822</a>
                                        </li>
                                        <li className="d-none d-xl-inline-block"><i className="far fa-location-dot" />16, KLP School Play Ground, Navabharath Nagar, Guntur </li>
                                        <li><i className="far fa-envelope" /><a href="mailto:satyacartravels2012@gmail.com">satyacartravels2012@gmail.com</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="header-links">
                                    <ul>
                                        <li>
                                            <div className="header-social"><span className="social-title">Follow Us:</span> <a href="https://www.facebook.com/share/1EtJNFkMLE/"><i className="fab fa-facebook-f" /></a> <a href="https://g.co/kgs/LJnBnnE"><i className="fab fa-google" /></a> 
                                            {/* <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in" /></a> 
                                            <a href="https://www.instagram.com/"><i className="fab fa-instagram" /></a> */}
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sticky-wrapper">
                    <div className="sticky-active">
                        <div className="menu-area" data-bg-src={process.env.PUBLIC_URL+"/assets/img/bg/pattern_bg_2.png"}>
                            <div className="container">
                                <div className="row align-items-center justify-content-between">
                                    <div className="col-auto">
                                        <div className="header-logo"><Link to={process.env.PUBLIC_URL+"/"} reloadDocument><img src={process.env.PUBLIC_URL+"/assets/img/logo.png"} alt="Taxseco" /></Link></div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="row align-items-center">
                                            <div className="col-auto">
                                                <nav className="main-menu d-none d-lg-inline-block">
                                                <ul>
                                                    <li>
                                                        <NavLink to={process.env.PUBLIC_URL+"/"} reloadDocument > Home </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to={process.env.PUBLIC_URL+"/Car-Travels-in-Guntur"}>About Us</NavLink>
                                                    </li>
                                                    {/* <li>
                                                        <NavLink to={process.env.PUBLIC_URL+"/Services"}>Our Services</NavLink>
                                                    </li> */}
                                                    <li>
                                                        <NavLink to={process.env.PUBLIC_URL+"/Guntur-Car-Travels-Rates"}>Our Cars & Tariff</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to={process.env.PUBLIC_URL+"/GalleryPage"}>Gallery</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to={process.env.PUBLIC_URL+"/Contact"}>Contact</NavLink>
                                                    </li>
                                                </ul>
                                                </nav><button type="button" className="as-menu-toggle d-inline-block d-lg-none"><i className="far fa-bars" /></button>
                                            </div>
                                            <div className="col-auto d-none d-xxl-block">
                                                <div className="header-button"><Link to={{pathname: process.env.PUBLIC_URL+"/",hash:"#Appointment"}} reloadDocument className="as-btn style3 style-skew"><span className="btn-text">BOOK A
                                                    TAXI</span></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="logo-shape" />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;