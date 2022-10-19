import React from "react";
import notfound from "../../image/Na_June_69.jpg"
import { Link, useNavigate } from "react-router-dom";
import s from './NotFound.module.css';



export default function NotFound() {
    let navigate = useNavigate();
    /* const handleGoBackBtn = () => {
        navigate(-1);
    }; */

    function handleReload(){
        window.location.reload()
    }


    return (
        <div className={s.container}>
            <button className={s.btnNotFound} onClick={handleReload}>
                Home
            </button>
            <div className={s.containerImage}>
                <img className={s.imageNotFound} src={notfound} width="800px" />
            </div>

        </div>
    )
}