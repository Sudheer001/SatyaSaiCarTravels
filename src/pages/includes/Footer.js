import { Link, NavLink } from "react-router-dom";

let Footer = () => {
  return (
    <div>
      <div className="bg-black1">
        <div className="container">
          <div className="contact-info-wrap">
            <div className="info-card style3">
              <div className="info-card_icon">
                <i className="fal fa-envelope" />
              </div>
              <div className="info-card_content">
                <p className="info-card_text">Email Address</p>
                <Link
                  to="mailto:satyacartravels2012@gmail.com"
                  className="info-card_link"
                >
                  satyacartravels2012@gmail.com
                </Link>
              </div>
            </div>
            <div className="info-card style3">
              <div className="info-card_icon">
                <i className="fal fa-phone" />
              </div>
              <div className="info-card_content">
                <p className="info-card_text">Phone Number</p>
                <Link to="tel:+919912898822" className="info-card_link">
                  (+91) 99128 98822
                </Link>
                <br />
                <Link to="tel:+919912898822" className="info-card_link">
                  (+91) 99128 98822
                </Link>
              </div>
            </div>
            <div className="info-card style3">
              <div className="info-card_icon">
                <i className="fal fa-location-dot" />
              </div>
              <div className="info-card_content">
                <p className="info-card_text">Our Adress</p>
                <Link
                  to="https://goo.gl/maps/F9UGb4m1kJSyY6G89"
                  className="info-card_link"
                >
                  16, KLP School Play Ground, 4-20, Siddhartha Nagar, SVN
                  Colony,
                </Link>
                <br />
                <Link
                  to="https://maps.app.goo.gl/NAopociPUVV1ZUxE7"
                  className="info-card_link"
                >
                  {" "}
                  Navabharath Nagar, Guntur
                </Link>
                {/* <p className="info-card_text">Our Adress</p><Link to="https://goo.gl/maps/F9UGb4m1kJSyY6G89" className="info-card_link">Rajamahendravaram, AP</Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer-wrapper footer-layout1">
        <div className="widget-area">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-6 col-xl-auto">
                <div className="widget footer-widget">
                  <h3 className="widget_title">About Us</h3>
                  <div className="as-widget-about">
                    <p className="footer-text">
                      Satya Sai Car Travels are the best car travels in Gunutr
                      in terms of customer friendly treatment, well maintained
                      cars, polite drivers. well planning in trips etc. just
                      give us a call, sit back, relax
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget footer-widget">
                  <h3 className="widget_title">Contact Us</h3>
                  <div className="as-widget-about">
                    {/* <h6 style={{fontSize:'18px', color:'#ccc'}}><i className="far fa-map-location-dot" /> Guntur</h6> */}
                    <p className="footer-text">
                      16, KLP School Play Ground, 4-20, Siddhartha Nagar, SVN
                      Colony, Navabharath Nagar, Guntur. PIN code : 522006
                    </p>

                    <div className="as-social style2">
                      <a
                        target="_blank"
                        href="https://www.facebook.com/share/1EtJNFkMLE/"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>{" "}
                      <a target="_blank" href="https://g.co/kgs/LJnBnnE">
                        <i className="fab fa-google" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Areas we serve</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <NavLink
                          to={process.env.PUBLIC_URL + "/Locations/Mangalagiri"}
                          reloadDocument
                        >
                          Car travels in Mangalagiri
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={process.env.PUBLIC_URL + "/Locations/Tenali"}
                          reloadDocument
                        >
                          Car travels in Tenali
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={process.env.PUBLIC_URL + "/Locations/Vijayawada"}
                          reloadDocument
                        >
                          Car travels in Vijayawada
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={process.env.PUBLIC_URL + "/Locations/Tadepalli"}
                          reloadDocument
                        >
                          Car travels in Tadepalli
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-wrap">
          <div className="container">
            <p className="copyright-text">
              © {new Date().getFullYear()} <a href="#">Satya Sai Car Travels</a>
              . All Rights Reserved.{" "}
              <a href="https://softsolutionz.in/" target="_blank">
                Soft Solutionz
              </a>
            </p>
          </div>
        </div>
      </footer>
      <a href="#" className="scrollToTop scroll-btn">
        <i className="far fa-arrow-up" />
      </a>
    </div>
  );
};

export default Footer;
