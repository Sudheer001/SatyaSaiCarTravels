import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CreateItem } from '../hooks/customServer';

function Contact_banner() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = `${process.env.PUBLIC_URL}/assets/js/main.js`;
        script.async = true;
        document.body.appendChild(script);
      return () => {
          document.body.removeChild(script);
        }
      }, []);
    return(
        <div className="breadcumb-wrapper" data-bg-src={process.env.PUBLIC_URL+"/assets/img/breadcumb/breadcumb-bg.jpg"} data-overlay="title" data-opacity={4}>
            <div className="container z-index-common">
                <h1 className="breadcumb-title">Contact Us</h1>
                <ul className="breadcumb-menu">
                    <li><Link to={process.env.PUBLIC_URL+"/"}>Home</Link></li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>

    )
}

function Contact_details() {
    return (
        <section className="space">
            <div className="container">
                <div className="tab-content">
                    <div class="tab-pane fade show active" role="tabpanel" aria-labelledby="nav-one-tab">
                        <div className="row gy-30 justify-content-center">
                            <div className="col-md-6 col-lg-6">
                                <div className="contact-box">
                                    {/* <div className="contact-box_img"><img src={process.env.PUBLIC_URL+"/assets/img/normal/contact_1_7.jpg"} alt="service image" /></div> */}
                                    <div className="contact-box_content">
                                        <div className="contact-box_icon"><i className="far fa-headset" /></div>
                                        <div className="contact-box_info">
                                            <p className="contact-box_text">Call Us 24/7</p>
                                            <h5 className="contact-box_link"><a href="tel:+919912898822">+91 99128 98822</a></h5>
                                        </div>
                                    </div>
                                    <div className="contact-box_content">
                                        <div className="contact-box_icon"><i className="far fa-envelope-open-text" /></div>
                                        <div className="contact-box_info">
                                            <p className="contact-box_text">Mail Us</p>
                                            <h5 className="contact-box_link"><a href="mailto:satyacartravels2012@gmail.com">satyacartravels2012@gmail.com</a></h5>
                                        </div>
                                    </div>
                                    <div className="contact-box_content">
                                        <div className="contact-box_icon"><i className="far fa-map-location-dot" /></div>
                                        <div className="contact-box_info">
                                            <p className="contact-box_text">Visit to our address</p>
                                            <h5 className="contact-box_link">16, KLP School Play Ground, 4-20, Siddhartha Nagar, SVN Colony, Navabharath Nagar, Guntur . PIN code : 522006</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <div className="contact-box">
                                    <div className="contact-box_img">
                                        {/* <img src={process.env.PUBLIC_URL+"/assets/img/normal/contact_1_8.jpg"} alt="service image" /> */}
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.0545257377858!2d80.4161918!3d16.320158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a75fb2ed029af%3A0x92bf88fd76dc29ae!2sSatya%20Sai%20Car%20Travels%20Guntur!5e0!3m2!1sen!2sin!4v1739774943962!5m2!1sen!2sin" allowfullscreen="" height={'300px'} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function Contact_form() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        CreateItem('contact_now', inputs).then((response)=>{
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
        <section className="space bg-smoke position-relative">
            <div className="container">
                <div className="title-area text-center">
                    <span className="sub-title">OUR CONTACT FORM</span>
                    <h2 className="sec-title">You can connect with uS</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <input type="text" className="form-control" name="name" id="name" placeholder="Enter Your Name" value={inputs.name || ''} onChange={handleChange}  /> <i className="fal fa-user" />
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Email Address" value={inputs.email || ''} onChange={handleChange}  /> <i className="fal fa-envelope" />
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="text" className="form-control" name="ph_no" id="ph_no" placeholder="Phone Number" value={inputs.ph_no || ''} onChange={handleChange}  /> <i className="fal fa-phone" />
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" value={inputs.subject || ''} onChange={handleChange}  /> <i className="fal fa-pencil" />
                                </div>
                                <div className="form-group col-12">
                                    <textarea name="message" id="message" cols={30} rows={3} className="form-control" placeholder="Message" value={inputs.message || ''} onChange={handleChange}  /> <i className="fal fa-comment" />
                                </div>
                                <div className="form-btn col-12 mt-10 text-center">
                                    <button type='submit' className="as-btn">Send Message Now</button>
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

function Contact_map(){
    return(
       <div className="map-sec"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.0545257377858!2d80.4161918!3d16.320158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a75fb2ed029af%3A0x92bf88fd76dc29ae!2sSatya%20Sai%20Car%20Travels%20Guntur!5e0!3m2!1sen!2sin!4v1739774943962!5m2!1sen!2sin" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
    )
}


function Contact(){
    return(
        <>
        <Contact_banner/>
        <Contact_details/>
        <Contact_form/>
        {/* <Contact_map/> */}
        </>
    )
}

export default Contact;