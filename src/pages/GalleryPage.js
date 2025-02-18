import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import 'photoswipe/dist/photoswipe.css'

import { Gallery, Item } from 'react-photoswipe-gallery'

function Gallery_banner() {
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
                <h1 className="breadcumb-title">Gallery</h1>
                <ul className="breadcumb-menu">
                    <li><Link to={process.env.PUBLIC_URL+"/"}>Home</Link></li>
                    <li>Gallery</li>
                </ul>
            </div>
        </div>
    )
}


function Gallery_more() {
    return (
      <section className="space">
        <div className="container">
          <div className='row'>
           <Gallery>
              <Item
                original={process.env.PUBLIC_URL+"/assets/img/Gallary/gallary1.jpeg"}
                thumbnail={process.env.PUBLIC_URL+"/assets/img/Gallary/gallary1.jpeg"}
              >
                {({ ref, open }) => (
                  <img ref={ref} onClick={open} className="col-md-6 col-lg-3" style={{marginBottom:30}} src={process.env.PUBLIC_URL+"/assets/img/Gallary/gallary1.jpeg"} />
                )}
              </Item>
              <Item
                original={process.env.PUBLIC_URL+"/assets/img/Gallary/gallary2.jpeg"}
                thumbnail={process.env.PUBLIC_URL+"/assets/img/Gallary/gallary2.jpeg"}
              >
                {({ ref, open }) => (
                  <img ref={ref} onClick={open} className="col-md-6 col-lg-3" style={{marginBottom:30}} src={process.env.PUBLIC_URL+"/assets/img/Gallary/gallary2.jpeg"} />
                )}
              </Item>
              <Item
                original={process.env.PUBLIC_URL+"/assets/img/Gallary/gallary3.jpeg"}
                thumbnail={process.env.PUBLIC_URL+"/assets/img/Gallary/gallary3.jpeg"}
              >
                {({ ref, open }) => (
                  <img ref={ref} onClick={open} className="col-md-6 col-lg-3" style={{marginBottom:30}} src={process.env.PUBLIC_URL+"/assets/img/Gallary/gallary3.jpeg"} />
                )}
              </Item>
              <Item
                original={process.env.PUBLIC_URL+"/assets/img/Gallary/gallary4.jpeg"}
                thumbnail={process.env.PUBLIC_URL+"/assets/img/Gallary/gallary4.jpeg"}
              >
                {({ ref, open }) => (
                  <img ref={ref} onClick={open} className="col-md-6 col-lg-3" style={{marginBottom:30}} src={process.env.PUBLIC_URL+"/assets/img/Gallary/gallary4.jpeg"} />
                )}
              </Item>
              <Item
                original={process.env.PUBLIC_URL+"/assets/img/Gallary/gallary5.jpeg"}
                thumbnail={process.env.PUBLIC_URL+"/assets/img/Gallary/gallary5.jpeg"}
              >
                {({ ref, open }) => (
                  <img ref={ref} onClick={open} className="col-md-6 col-lg-3" style={{marginBottom:30}} src={process.env.PUBLIC_URL+"/assets/img/Gallary/gallary5.jpeg"} />
                )}
              </Item>
              <Item
                original={process.env.PUBLIC_URL+"/assets/img/Gallary/gallary6.jpeg"}
                thumbnail={process.env.PUBLIC_URL+"/assets/img/Gallary/gallary6.jpeg"}
              >
                {({ ref, open }) => (
                  <img ref={ref} onClick={open} className="col-md-6 col-lg-3" style={{marginBottom:30}} src={process.env.PUBLIC_URL+"/assets/img/Gallary/gallary6.jpeg"} />
                )}
              </Item>
              <Item
                original={process.env.PUBLIC_URL+"/assets/img/Gallary/gallary7.jpeg"}
                thumbnail={process.env.PUBLIC_URL+"/assets/img/Gallary/gallary7.jpeg"}
              >
                {({ ref, open }) => (
                  <img ref={ref} onClick={open} className="col-md-6 col-lg-3" style={{marginBottom:30}} src={process.env.PUBLIC_URL+"/assets/img/Gallary/gallary7.jpeg"} />
                )}
              </Item>
              <Item
                original={process.env.PUBLIC_URL+"/assets/img/Gallary/gallary8.jpeg"}
                thumbnail={process.env.PUBLIC_URL+"/assets/img/Gallary/gallary8.jpeg"}
              >
                {({ ref, open }) => (
                  <img ref={ref} onClick={open} className="col-md-6 col-lg-3" style={{marginBottom:30}} src={process.env.PUBLIC_URL+"/assets/img/Gallary/gallary8.jpeg"} />
                )}
              </Item>
           </Gallery>
           </div>
        </div>
      </section>
    )
}



function GalleryPage(){
    return(
        <>
        <Gallery_banner/>
        <Gallery_more/>
        </>
    )
}

export default GalleryPage;