import { useEffect, useState, useRef } from 'react';
import {Link} from 'react-router-dom';
import {GetList} from '../hooks/customServer'

function Tariff_banner() {
    
    return (
        <div className="breadcumb-wrapper" data-bg-src={process.env.PUBLIC_URL+"/assets/img/breadcumb/breadcumb-bg.jpg"} data-overlay="title" data-opacity={4}>
            <div className="container z-index-common">
                <h1 className="breadcumb-title">Guntur Car Travels Rates</h1>
                <ul className="breadcumb-menu">
                    <li><Link to={process.env.PUBLIC_URL+"/"}>Home</Link></li>
                    <li>OUR CARS & TARIFF</li>
                </ul>
            </div>
        </div>
    )
}


function Tariff_more() {
  let [fleet, setfleet] = useState([]);
    let [fleetPath, setfleetPath] = useState(''); 
     
    
    useEffect(()=>{
        GetList('fleet').then((fleetList)=>{
            if(fleetList){
                if(fleetList.success){                    
                  setfleet(fleetList.result);
                  setfleetPath(fleetList.path);
                }
            }
        });       
    },[])

    useEffect(() => {
      if(fleet.length>0){
      const script = document.createElement('script');
      script.src = `${process.env.PUBLIC_URL}/assets/js/main.js`;
      script.async = true;
      document.body.appendChild(script);
    return () => {
        document.body.removeChild(script);
      }      
        
    }
    }, [fleet]);
    return (
        <section className="space">
          {fleet.length>0 && 
        (<div className="container">
          <div className="taxi-tab filter-menu-active">
            <button data-filter=".Sedan_Cars" className="as-btn active" type="button" data-slide-go-to={1}>SEDAN CARS</button>
            <button data-filter=".SUV_Cars" className="as-btn" type="button" data-slide-go-to={2}>SUV CARS</button>
            <button data-filter=".Tempos" className="as-btn" type="button" data-slide-go-to={3}>TEMPO</button>
            <button data-filter=".Buses" className="as-btn" type="button" data-slide-go-to={4}>BUSES</button>
            <span className="indicator start" />
          </div>
          <div className="row gy-30 filter-active-cat1">
            {fleet.length>0 && fleet.map((flt, index)=>(

<div className={`col-xl-4 col-md-6 filter-item ${flt.car_type.replace(" ","_")}`} key={index}>
  <div className="taxi-box" style={{textAlign:'left'}}>
    <div className="taxi-box_img">
    <img src={`${fleetPath}${flt.id}.jpg`} alt="taxi" />
    </div>
    <h3 className="taxi-box_title">
      <a href="#">{flt.name}</a>
    </h3>
    <div className="service-block_text" dangerouslySetInnerHTML={{__html:flt.description}}></div>
    <Link to={{pathname:process.env.PUBLIC_URL+"/",hash:"#Appointment"}} reloadDocument className="as-btn">Book This Car Now</Link>
  </div>
</div>

            

          ))}
          </div>
        </div>
)}
        
        
      </section>
    )
}



function Tariff(){
    return(
        <>
        <Tariff_banner/>
        <Tariff_more/>
        </>
    )
}

export default Tariff;