import { useEffect } from "react";
import { Link } from "react-router-dom";

function About_banner() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `${process.env.PUBLIC_URL}/assets/js/main.js`;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div
      className="breadcumb-wrapper"
      data-bg-src={
        process.env.PUBLIC_URL + "/assets/img/breadcumb/breadcumb-bg.jpg"
      }
      data-overlay="title"
      data-opacity={4}
    >
      <div className="container z-index-common">
        <h1 className="breadcumb-title">
          Car Travels In Guntur
          <br />
          Ph : 9912898822
        </h1>
        <ul className="breadcumb-menu">
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
          </li>
          <li>About Us</li>
        </ul>
      </div>
    </div>
  );
}

function About_more() {
  return (
    <div className="space">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 mb-40 mb-xl-0">
          <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/normal/about_4_1.jpg"
                  }
                  alt="About"
                />
                 <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/normal/about_4_2.jpg"
                  }
                  alt="About" className="about2img"
                />
          </div>
          <div className="col-xl-6 ps-3 ps-xl-4">
            <div className="title-area mb-35 text-md-start text-center">
              <span className="sub-title">More About Us</span>
              <h3 className="sec-title text-capitalize">
                Best Cab Service In Guntur <br />
                Ph : 9912898822
              </h3>
            </div>

            <p className="mt-n2 mb-30 text-md-start text-center">
              When you planning for any kind of travel{" "}
              <strong>Satya Sai Car Travels</strong> are the best car travels in
              Gunutr in terms of customer friendly treatment, well maintained
              cars, polite drivers. well planning in trips etc. just give us a
              call, sit back, relax, we plan everything for you with in your
              budget and make your trip memorable. Following are some of the
              parameters on which we are considered as the No1 car travels.
            </p>
            <ul>
              <li>
                We provide well maintained cars according to your requirement.
              </li>
              <li>
                We have team of&nbsp; professional drivers to give you the best
                travel experience
              </li>
              <li>
                We also provide tempo travelers and Buses of different seating
                capacities to suit your requirements.&nbsp;
              </li>
              <li>Reasonable tariff,</li>
              <li>
                Assist customers to plan trip without wasting money &amp; time
              </li>
              <li>Finally, We committed for safe and fast journey.</li>
            </ul>
            <h5 className="">
              Best Car Rental Service In Guntur
              <br />
              Ph : 9912898822
            </h5>

            <p>We provide cars for all kinds of travel needs.</p>
            <div className="row">
              <div className="col-md-4">
                <ul>
                  <li>Weekend Travel</li>
                  <li>Pilgrim Travel</li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul>
                  <li>Business Travel</li>
                  <li>Pleasure Travel</li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul>
                  <li>Site Seeing Travel</li>
                  <li>Holiday Travel</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

let About_how_works = () => {
  return (
    <section className="space" style={{ paddingTop: "0px" }}>
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">Our Work Process</span>
          <h2 className="sec-title">How We Work</h2>
        </div>
        <div className="process-box-wrap">
          <div className="process-box">
            <div className="process-box_icon">
              <i className="fa-thin fa-phone" />{" "}
              <span className="process-box_num">01</span>
            </div>
            <h3 className="process-box_title">Receiving Call</h3>
            <p className="process-box_text">
            On receiving call we try to understand what exactly your travel requirement..
            </p>
          </div>
          <div className="process-box style2">
            <div className="process-box_icon">
              <i className="fa-thin fa-car-building" />{" "}
              <span className="process-box_num">02</span>
            </div>
            <h3 className="process-box_title">Plan your trip</h3>
            <p className="process-box_text">
            Basing on your travel requirements we assist you to plan your trip more comfortable.
            </p>
          </div>
          <div className="process-box">
            <div className="process-box_icon">
              <i className="fa-thin fa-bridge-suspension" />{" "}
              <span className="process-box_num">03</span>
            </div>
            <h3 className="process-box_title">Arrange for trip</h3>
            <p className="process-box_text">
            We make all arrangements like vehicle, driver, accommodation etc for your trip.
            </p>
          </div>
          <div className="process-box style2">
            <div className="process-box_icon">
              <i className="fa-thin fa-user-shield" />{" "}
              <span className="process-box_num">04</span>
            </div>
            <h3 className="process-box_title">Safe Journey</h3>
            <p className="process-box_text">
            We take you to desired places and drop you at destination safely after completion of the entire trip.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

function About() {
  return (
    <>
      <About_banner />
      <About_more />
      <About_how_works />
    </>
  );
}

export default About;
