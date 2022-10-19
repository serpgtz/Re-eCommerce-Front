import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import flecha1 from '../../image/Flecha2.png'
import flecha2 from '../../image/Flecha3.png'
import s from './Marquee.module.css';


const Marquee = () => {
    const myProduct = useSelector((state) => state.product.products);
    console.log('myProduct-----------------------', myProduct)
    return (
        <div>
            {/* <div>
                <div className={s.container}>
                    <img className={s.ControlPrev} src={flecha1} alt="imageProduct" />

                    <div className={s.slider}>
                        myProduct?.map((e)=>{
                            <img className={s.img} src={e.image} alt="img" />
                        })

                    </div>

                    <img className={s.ControlNext} src={flecha2} alt="imageProduct" />
                </div>
                <marquee direction="left">
                    Con Cell Store el poder de la comunicación en tus manos...

                    No te pierdas los últimos avances en la tecnología de la comunicación...

                    Con Cell Store el poder de la comunicación en tus manos...
                </marquee>
            </div> */}
            {/* Renderizar los filtros. Evitar que el Admin pueda comprar. Agregar
  cloudinary. Auth0. Órdenes y pagos. Unificar estilo.  */}
        </div>
    );
};

export default Marquee;


