import React from "react";
import s from "./Footer.module.css"
import face from "../../image/Facebook_logo_PNG12.png"
import insta from "../../image/pngwing.com.png"
import twit from "../../image/twit.com.png"

export default function Footer(){


    return (
        <div className={s.container}>
           
            <div className={s.redes}>
            <span>Siguenos en:</span>

                <ul className={s.redeslist}>
                    <li><img src={face}width="40px"/></li>
                    <li><img src={insta}width="25px"/></li>
                    <li><img src={twit}width="32px"/></li>
               </ul>

            </div>
            <div className={s.pedido}>
                <h4>Informacion del pedido</h4>
                <ul className={s.listpedidos}>
                    <li>Revisar un Pedido</li>
                    <li>Ver Politica de Devolucion</li>
                    <li>Canjear un Rembolso</li>
                </ul>
            </div>

            <div className={s.responsabilidad}>
                <h4>Responsabilidad Corporativa</h4>
                <ul className={s.respon}>
                    <li>Comunidad</li>
                    <li>Sostentabilidad</li>
                    <li>Centro de Privacidad</li>
                </ul>
            </div>

            <div className={s.acerca}>
                <h4>Acerca de Cell Store</h4>
                <ul className={s.listacerca}>
                    <li>Nuestra Historia</li>
                    <li>Sala de Prensa</li>
                    <li>Relacion con Inversionistas</li>
                    <li>Contactanos</li>
                </ul>
            </div>

        </div>
    )
}