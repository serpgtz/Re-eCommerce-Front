import React from 'react'
import Carousel from 'react-material-ui-carousel'
const Carrusel = () => {

    const anArrayOfNumbers = [<img src="https://www.accesorios.com.ar/img/cms/g52.png"/>, 
                          <img src="http://random.com/two"/>, 
                          <img src="http://random.com/three"/>
                         ];
  return (
    <Carousel
    IndicatorIcon={anArrayOfNumbers}
>
    
</Carousel>
  )
}

export default Carrusel
