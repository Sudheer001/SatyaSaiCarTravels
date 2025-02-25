import React, { useEffect, useState } from 'react';
import {CreateItem, DeleteItem, GetList} from '../hooks/customServer'
import {Link} from 'react-router-dom';

function Sliders() {
    
    let [banners, setBanners] = useState([0,1,2]);
    let [bannersPath, setBannersPath] = useState('');      
    
    useEffect(()=>{
        GetList('banners').then((bannersList)=>{
            if(bannersList){
                if(bannersList.success){                    
                  setBanners(bannersList.result);
                  setBannersPath(bannersList.path);
                }
                addjs();
            }
        });       
    },[])

    
    function addjs(){
        const script = document.createElement('script');
        script.src = `${process.env.PUBLIC_URL}/assets/js/main.js`;
        script.async = true;
        document.body.appendChild(script);
      return () => {
          document.body.removeChild(script);
        }
    }

    return (
        <div className="as-hero-wrapper hero-slider-4 as-carousel" data-slide-show={1} data-md-slide-show={1} data-fade="true" data-arrows="true" data-xl-arrows="true" data-ml-arrows="true" data-lg-arrows="true">
            { banners && banners.map((banner, index)=>{                
            return <div key={index} className="as-hero-slide">
                <div className="as-hero-bg" data-bg-src={`${bannersPath}${banner.id}.jpg`}>
                    <img src={process.env.PUBLIC_URL+"/assets/img/bg/hero_overlay_4.png"} alt="Satya Sai Car Travels" />
                    </div>
                <div className="container">
                    <div className="hero-style4">
                        <h1 className="hero-title" data-ani="slideindown" data-ani-delay="0.1s">{banner.stittle}</h1>
                        <h1 className="hero-title" data-ani="slideindown" data-ani-delay="0.1s">{banner.ltittle}</h1>                        
                    </div>
                </div>
            </div>                
            })}
        </div>
    )
}

let Appointment = () => {
    const [inputs, setInputs] = useState({});
    const [hash, setHash] = useState(() => window.location.hash);
    let targetRef = React.createRef();
    
    useEffect(()=>{
        if(hash){
         setTimeout(() =>{
             targetRef.scrollIntoView({
                 behavior: 'smooth'
             }) 
            }, 500); 
        }
     },[hash])

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        CreateItem('book_now', inputs).then((response)=>{
            if(response){
                if(response.success){
                    window.alert(response.message);
                    setInputs({});
                }else{                    
                    window.alert(response.message);
                }
            }
        });        
    }

    return (
        <section className="space" id="Appointment" ref={ref => {targetRef = ref}}>
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-6">
                        <h2 className="mt-n3">Best Car Travels</h2>
                        <h2 className="mt-n3">For Your Travels Needs.</h2>
                        <p className="mb-4">Satya Sai Car Travels has good fleet, provides all range of cars, tempos, minibuses to all types of occasions like temple visits, tourist places visits, site seeing, marriage bookings, one way droppings, round trips, business trips, corporate car bookings etc. We have built up trustworthy relationship with our esteemed customers.</p>
                        {/* <div className="about-profile">
                            <div className="avater"><img src={process.env.PUBLIC_URL+"/assets/img/normal/about_avater.jpg"} alt="avater" /></div>
                            <div className="media-body">
                                <h3 className="name">Bhaskar</h3><span className="desig">Proprietor</span>
                            </div>
                        </div> */}
                        <Link to={process.env.PUBLIC_URL+"/Car-Travels-in-Guntur"} className='as-btn'>Discover More</Link>
                    </div>
                    <div className="col-lg-6 pe-xl-5 mb-5 mb-lg-0">
                        
                    <form className="booking-form4" onSubmit={handleSubmit}>
                    <h4 style={{color: '#fff', textAlign:'center'}}>Book A Taxi</h4>
                        <div className="row">
                            <div className="form-group col-sm-6">
                            <input type="text" className="form-control" id="name" name='name' placeholder="Your Name" value={inputs.name || ''} onChange={handleChange} /><i className="fal fa-user" />
                            </div>
                            <div className="form-group col-sm-6">
                            <input type="number" className="form-control" name="number" id="number" placeholder="Phone Number"  value={inputs.number || ''} onChange={handleChange} /><i className="fal fa-phone" />
                            </div>
                            <div className="form-group col-md-6">
                            <input type="email" className="form-control" name="email" id="email" value={inputs.email || ''} placeholder="Email Address" onChange={handleChange} /><i className="fal fa-envelope" />
                            </div>
                            <div className="form-group col-sm-6">
                            <input type="text" className="form-control" name="s_destination" id="s-destination" value={inputs.s_destination || ''} placeholder="Start Place" onChange={handleChange}  /><i className="fal fa-location-dot" />
                            </div>
                            <div className="form-group col-sm-6">
                            <input type="text" className="form-control" name="e_destination" id="e_destination" value={inputs.e_destination || ''} placeholder="End Place" onChange={handleChange}  /><i className="fal fa-location-dot" />
                            </div>
                            <div className="form-group col-sm-6">
                            <input type="text" className="form-control" name="passenger" id="passenger" value={inputs.passenger || ''} placeholder="Passengers#" onChange={handleChange} /><i className="fal fa-user-group" />
                            </div>
                            <div className="form-group col-sm-6">
                            <input type="text" className="date-pick form-control" name="date" id="date-pick" value={inputs.date || ''} placeholder="Select Date" onChange={handleChange} /><i className="fal fa-calendar-days" />
                            </div>
                            <div className="form-group col-sm-6">
                            <input type="text" className="time-pick form-control" name="time" id="time-pick" value={inputs.time || ''} placeholder="Select Time" onChange={handleChange} /><i className="fal fa-clock" />
                            </div>
                            <div className="form-group col-12">
                            <select className="form-select" name="vehicle" id="vehicle"  value={inputs.vehicle || ''} onChange={handleChange}>
                                <option value="" selected="selected" disabled="disabled"> Select Car Type </option>
                                <option value="Sedan">Sedan</option>
                                <option value="SUV">SUV</option>
                                <option value="Tempo">Tempo</option>
                                <option value="Buses">Buses</option>
                            </select>
                            </div>
                            <div className="form-btn col-12">
                            <button type='submit' className="as-btn">Book Your Car Now</button>
                            </div>
                        </div>
                        <p className="form-messages mb-0 mt-3" />
                    </form>

                    </div>
                    
                </div>
            </div>
        </section>

    )
}

function Services() {
    let [serivces, setSerivces] = useState([]);
    let [filterdserivces, setfilterdserivces] = useState([]);
    let [serivcesPath, setSerivcesPath] = useState('');

    useEffect(()=>{
        GetList('packages').then((serivcesList)=>{
            if(serivcesList){
                if(serivcesList.success){                  
                   setSerivces(serivcesList.result);
                   setSerivcesPath(serivcesList.path);
                }
            }
        });       
    },[])

    useEffect(()=>{
        if(serivces.length>0){      
            filterServices(1);
        }
    },[serivces])

    function filterServices(id){
      let tempData=serivces.filter((item)=>{
          return Number(item.car_type) === Number(id);
      });
      setfilterdserivces(tempData);
    }
    return (
        <section className="space overflow-hidden" data-bg-src={process.env.PUBLIC_URL+"/assets/img/bg/service_bg_1.jpg"}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-8 col-md-10">
                        <div className="title-area text-center">
                            <h2 className="sec-title">OUR BEST PACKAGES</h2>
                            {/* <p className="sec-text">Seamlessly visualize leading-edge action items without timely leadership.
                                Conveniently visualize exceptional value vis-a-vis compelling imperatives.</p> */}
                        </div>
                    </div>
                </div>
                {/* <div className="taxi-tab filter-menu-active"> 
                    <button className="as-btn active" type="button" onClick={()=>filterServices(1)}>Tourist Places Visits</button> 
                    <button className="as-btn" type="button" onClick={()=>filterServices(2)}>Temple Visits</button> 
                    <button className="as-btn" type="button" onClick={()=>filterServices(3)}>Droppings</button>
                    <button className="as-btn" type="button" onClick={()=>filterServices(4)}>Hourly Packages</button>
                </div> */}
                <div className="row">
                    {filterdserivces.length>0 && filterdserivces.map((item,index)=>{
                   return <div key={index} className="col-md-6 col-lg-4 mb-4">
                        <div className="service-block" style={{minHeight:'850px', position:'relative'}}>
                            <div className="service-block_img"><img src={`${serivcesPath}${item.id}.jpg`} alt="service image" /></div>
                            <div className="service-block_content">
                                <h3 className="service-block_title"><a href="#">{item.name}</a></h3>
                                <div className="service-block_text" dangerouslySetInnerHTML={{__html:item.description}}></div>
                                <Link to={{pathname: process.env.PUBLIC_URL+"/",hash:"#Appointment"}} reloadDocument className="as-btn" style={{position: 'absolute', bottom: '5%', padding: '15px 31px'}}>Book Now</Link>
                            </div>
                        </div>
                    </div>
                    })}
                </div>
            </div>
            {/* <div className="shape-mockup movingTopRight d-none d-xl-block" data-top="-10%" data-left="-10%"><img src={process.env.PUBLIC_URL+"/assets/img/shape/line_1.png"} alt="shapes" /></div>
            <div className="shape-mockup movingBottomLeft d-none d-xl-block" data-bottom="-10%" data-right="-10%"><img src={process.env.PUBLIC_URL+"/assets/img/shape/line_2.png"} alt="shapes" /></div> */}
        </section>

    )
}


function Advantages() {
    return(
    <section className="space" data-bg-src={process.env.PUBLIC_URL+"/assets/img/bg/feature_bg_1.jpg"} data-opacity={7} data-overlay="overlay2">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-7 col-md-10">
                    <div className="title-area text-center">
                        <h2 className="sec-title text-white">Why We Are The Best </h2>
                        <p className="sec-text text-white">With Satya Sai Car Travels you will enjoy and feel comfort at every moment of your trip</p>
                    </div>
                </div>
            </div>
            <div className="row as-carousel dot-style2" data-slide-show={4} data-lg-slide-show={3} data-md-slide-show={2} data-sm-slide-show={2} data-xs-slide-show={1}>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="feature-box">
                        <div className="feature-box_icon layer-btn"><img src={process.env.PUBLIC_URL+"/assets/img/icon/feature_1.svg"} alt="icon" />
                        </div>
                        <h3 className="feature-box_title">Well Maintained cars</h3>
                        <p className="feature-box_text">You will feel the hygienic atmosphere all the time of your journey in our vehicles</p>
                        <div className="feature-box_img"><img src={process.env.PUBLIC_URL+"/assets/img/icon/feature_1.svg"} alt="icon" /></div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="feature-box">
                        <div className="feature-box_icon layer-btn"><img src={process.env.PUBLIC_URL+"/assets/img/icon/driver.png"} alt="icon" />
                        </div>
                        <h3 className="feature-box_title">Professional Drivers</h3>
                        <p className="feature-box_text">You will have fabulous journey with our professional drivers throughout your trip</p>
                        <div className="feature-box_img"><img src={process.env.PUBLIC_URL+"/assets/img/icon/driver.png"} alt="icon" /></div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="feature-box">
                        <div className="feature-box_icon layer-btn"><img src={process.env.PUBLIC_URL+"/assets/img/icon/money-bag.png"} alt="icon" />
                        </div>
                        <h3 className="feature-box_title">Best Tariff</h3>
                        <p className="feature-box_text">Our tariffs never matters compare to the best services we provide.</p>
                        <div className="feature-box_img"><img src={process.env.PUBLIC_URL+"/assets/img/icon/money-bag.png"} alt="icon" /></div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="feature-box">
                        <div className="feature-box_icon layer-btn"><img src={process.env.PUBLIC_URL+"/assets/img/icon/feature_3.svg"} alt="icon" />
                        </div>
                        <h3 className="feature-box_title">On Time Pickup</h3>
                        <p className="feature-box_text">Maintaining sharp pickup time matters. We pick you up on time from your place</p>
                        <div className="feature-box_img"><img src={process.env.PUBLIC_URL+"/assets/img/icon/feature_3.svg"} alt="icon" /></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="particle" id="particle1" />
        {/* <div className="shape-mockup z-index-3 jump d-none d-xl-block" data-bottom="5%" data-right="2%"><img src={process.env.PUBLIC_URL+"/assets/img/shape/taxi_3.png"} alt="shapes" /></div> */}
    </section>
    )
}


function Testimonials() {
    return(
    <section className="space position-relative" data-bg-src={process.env.PUBLIC_URL+"/assets/img/bg/testimonial_bg_1.jpg"}>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 text-lg-start text-center">
                    <div className="title-area mb-20">
                        <h2 className="sec-title">Reviews from our customers</h2>
                        <p className="sec-text">We thank our valuable customers for their reviews on our services.</p>
                    </div><img src={process.env.PUBLIC_URL+"/assets/img/testimonial/taxi.png"} alt="taxi" />
                </div>
                <div className="col-lg-8 mt-4 mt-lg-0">
                    <div className="testi-block-area">
                        <div className="row as-carousel" id="testi1" data-slide-show={2} data-sm-slide-show={1}>
                            <div className="col-lg-6">
                                <div className="testi-block">
                                    <div className="testi-block_img"><img src={process.env.PUBLIC_URL+"/assets/img/testimonial/avater_1.jpg"} alt="avater" />
                                        <div className="testi-block_quote"><img src={process.env.PUBLIC_URL+"/assets/img/icon/quote_right_1.png"} alt="icon" /></div>
                                    </div>
                                    <h3 className="testi-block_name">Govindarao V</h3>
                                    <div className="testi-block_desig">Passenger</div>
                                    <div className="testi-block_text">Hyderabad dropping from Guntur is very cheap, fast and comfortable with Satya Sai Car Travels. I appreciate their trust worthy services. </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="testi-block">
                                    <div className="testi-block_img"><img src={process.env.PUBLIC_URL+"/assets/img/testimonial/avater_1.jpg"} alt="avater" />
                                        <div className="testi-block_quote"><img src={process.env.PUBLIC_URL+"/assets/img/icon/quote_right_1.png"} alt="icon" /></div>
                                    </div>
                                    <h3 className="testi-block_name">Kiranmayi D</h3>
                                    <div className="testi-block_desig">Passenger</div>
                                    <div className="testi-block_text">My family engaged car from Satya Sai Car Travels,Guntur for our Tirumala temple visit along with neighboring pilgrim places. The driver is very polite and helpful. We Had a comfort journey and peaceful darshanas.</div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="testi-block">
                                    <div className="testi-block_img"><img src={process.env.PUBLIC_URL+"/assets/img/testimonial/avater_1.jpg"} alt="avater" />
                                        <div className="testi-block_quote"><img src={process.env.PUBLIC_URL+"/assets/img/icon/quote_right_1.png"} alt="icon" /></div>
                                    </div>
                                    <h3 className="testi-block_name">Ramakrishna L</h3>
                                    <div className="testi-block_desig">Passenger</div>
                                    <div className="testi-block_text">I recently had the pleasure of renting a car from Satya Sai Car Travels for the second time. I was very impressed. The service was polite and the prices were very reasonable.</div>
                                </div>
                            </div>
                        </div>
                        <div className="as-icon-box testi-1"><button data-slick-prev="#testi1" className="icon-btn arrow-left"><i className="far fa-chevron-left" /></button> <button data-slick-next="#testi1" className="icon-btn arrow-right"><i className="far fa-chevron-right" /></button></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="sec-border1" data-bg-src={process.env.PUBLIC_URL+"/assets/img/shape/border_1.png"} />
    </section>
    )
}

let CallUs = () => {
    return (
        <section className="space position-relative">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <div className="shape-img1"><img src={process.env.PUBLIC_URL+"/assets/img/normal/call_man.jpg"} alt="man" />
                            <div className="shape" />
                        </div>
                    </div>
                    <div className="col-lg-6 ps-2 ps-lg-5">
                        <h4 className="mb-20">Call us to book a Cab</h4><a href="tel:+919912898822" className="cta-call">+91 99128 98822</a>
                        <p className="mb-35">Our travel services are available round the clock.  Just give us a call and tell us your travel requirement. We take care of rest of the things like type of car required, selecting best places to visit, How much time it takes to complete the tour etc.</p>
                    </div>
                </div>
            </div>
            {/* <div className="sec-shape1"><img src={process.env.PUBLIC_URL+"/assets/img/shape/ladies_bag.png"} alt="shape" /></div> */}
        </section>
    )
}

function Home(){
    return(
    <>
    <Sliders/>
    <Appointment/>
    <Services/>
    <Advantages/>
    <Testimonials/>
    <CallUs/>
    </>
    )
}

export default Home;