import { useEffect } from 'react';
import {Link} from 'react-router-dom';

function Services_banner() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `${process.env.PUBLIC_URL}/assets/js/main.js`;
    script.async = true;
    document.body.appendChild(script);
  return () => {
      document.body.removeChild(script);
    }
  }, []);
    return (
        <div className="breadcumb-wrapper" data-bg-src={process.env.PUBLIC_URL+"/assets/img/breadcumb/breadcumb-bg.jpg"} data-overlay="title" data-opacity={4}>
            <div className="container z-index-common">
                <h1 className="breadcumb-title">Services</h1>
                <ul className="breadcumb-menu">
                    <li><Link to={process.env.PUBLIC_URL+"/"}>Home</Link></li>
                    <li>Services</li>
                </ul>
            </div>
        </div>
    )
}


function Services_more() {
    return (
        <section className="space">
        <div className="container">
          <div className="row gy-40">
            <div className="col-md-6 col-lg-4">
              <div className="service-box">
                <div className="service-box_img"><img src={process.env.PUBLIC_URL+"/assets/img/service/service_3_1.jpg"} alt="service image" /></div>
                <div className="service-box_content">
                  <div className="service-box_icon"><i className="fa-light fa-bench-tree" /></div>
                  <h3 className="service-box_title"><a href="#">Tourist place Visits</a></h3>
                  <p className="service-box_text">We provide cars/buses for tourist places visits</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-box">
                <div className="service-box_img"><img src={process.env.PUBLIC_URL+"/assets/img/service/service_3_2.jpg"} alt="service image" /></div>
                <div className="service-box_content">
                  <div className="service-box_icon"><i className="fa-light fa-gopuram" />
                  </div>
                  <h3 className="service-box_title"><a href="#">Temple Visits</a></h3>
                  <p className="service-box_text">We provide cars / buses for temple visits</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-box">
                <div className="service-box_img"><img src={process.env.PUBLIC_URL+"/assets/img/service/service_3_3.jpg"} alt="service image" /></div>
                <div className="service-box_content">
                  <div className="service-box_icon"><i className="fa-light fa-car-building" />
                  </div>
                  <h3 className="service-box_title"><a href="#">Droppings</a></h3>
                  <p className="service-box_text">We provide cars / buses for droppings</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-box">
                <div className="service-box_img"><img src={process.env.PUBLIC_URL+"/assets/img/service/service_3_4.jpg"} alt="service image" /></div>
                <div className="service-box_content">
                  <div className="service-box_icon"><i className="fa-light fa-business-time" />
                  </div>
                  <h3 className="service-box_title"><a href="#">Business Trips</a></h3>
                  <p className="service-box_text">We provide business class cars for business trips</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-box">
                <div className="service-box_img"><img src={process.env.PUBLIC_URL+"/assets/img/service/service_3_5.jpg"} alt="service image" /></div>
                <div className="service-box_content">
                  <div className="service-box_icon"><i className="fa-light fa-rings-wedding" />
                  </div>
                  <h3 className="service-box_title"><a href="#">Marriage Bookings</a></h3>
                  <p className="service-box_text">We provide cars for marriages with decoration</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-box">
                <div className="service-box_img"><img src={process.env.PUBLIC_URL+"/assets/img/service/service_3_6.jpg"} alt="service image" /></div>
                <div className="service-box_content">
                  <div className="service-box_icon"><i className="fa-light fa-calendar-check" />
                  </div>
                  <h3 className="service-box_title"><a href="#">Monthly Rentals</a></h3>
                  <p className="service-box_text">We provide cars on monthly rental basis to Corporates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}



function Services(){
    return(
        <>
        <Services_banner/>
        <Services_more/>
        </>
    )
}

export default Services;