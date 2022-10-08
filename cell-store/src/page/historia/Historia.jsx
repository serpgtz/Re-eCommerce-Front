import React from "react";
import { Link } from "react-router-dom";

import s from "./Historia.module.css"



export default function Historia(){
    return (
        
        <div className={s.container}>
            <div>
            <Link className={s.link} to="/">
            BACK TO HOME
            </Link>
            </div>

            <img src="https://www.telcel.com/content/dam/telcelcom/mundo-telcel/quienes-somos/historia/imagenes/historia_1366x260.jpg"/>
            <h4 className={s.h4}>Todo lo que querías saber sobre Cell Store </h4>
            <div>
                <p>
                Cell Store forma parte de América Móvil, empresa líder en servicios integrados de telecomunicaciones en Latinoamérica. América Móvil está presente en 25 países de América y Europa.Con 31 años de experiencia, Cell Store es la empresa líder de telecomunicaciones y servicios de valor agregado en México, cubriendo a más del 95% de la población, lo que representa más de 76 millones de usuarios.

 
                </p>
                <div>
                    <p>2018
Lanzamos la red 4.5G, la única en México, que alcanza velocidades de descarga de hasta 1 Gigabit por segundo y es 10 veces más rápida que la Red 4G.

2016
Ganamos la licitación de espectro de la banda de frecuencias 1710-1780 MHz / 2110-2180 MHz (Banda AWS).

2012
Implementamos el sistema de LTE, LTE Advanced y Conectividad 4G, que permite una velocidad de navegación de hasta 20 Mbps.

2008
Lanzamos el sistema conectividad 3G, con lo que mejoramos la experiencia móvil de los usuarios.

2002
Implementamos la red GSM y servicios de Valor Agregado bajo el concepto Ideas Cell Store.

1996
Innovamos con el lanzamiento del sistema Amigo, el primer sistema de prepago en México y el mundo, con el cual nos consolidamos como líder en telefonía móvil al alcanzar en ese año un millón de usuarios.

1989
Surge la marca Cell Store, iniciamos operaciones en la ciudad de Tijuana.

1984
Obtenemos la concesión para explotar la red de servicio radiotelefonía móvil en la Ciudad de México, bajo la denominación de Radiomovil DIPSA S.A de C.V.

1981
Solicitamos a la Secretaría de Comunicaciones y Transportes (SCT) una concesión para instalar, operar y explotar un sistema de radiotelefonía móvil en el Distrito Federal conocido como radiotelefonía móvil (teléfono en el automóvil).

1954
Cambia de razón social por la de "Directorios Profesionales" (DIPSA). Durante el mismo año y debido a la modernización en telecomunicaciones, Teléfonos de México integra a DIPSA en la administración de la Radiotelefonía Móvil.</p>
                </div>
            </div>
        </div>
    )
}