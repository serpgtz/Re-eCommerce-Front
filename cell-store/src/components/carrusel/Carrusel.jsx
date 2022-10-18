import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import samsung from "../../image/portabilidad-tienda-30-12-octubre-2021-desktop.webp"
import huawei from "../../image/wearables-huawei-band-7-tienda-claro-desktop.webp"
import claro from "../../image/portabilidad-tienda-30-12-octubre-2021-desktop.webp"

const Carrusel = () => {
    
  
    return (
        <Carousel showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
        <div>
            <img src={samsung} />
            
        </div>
        <div>
            <img src={huawei} />
            
        </div>
        <div>
            <img src={claro} />
           
        </div>
    </Carousel>
    );
}

export default Carrusel
