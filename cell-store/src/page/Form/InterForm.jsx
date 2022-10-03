import React from 'react'
import { Link, useParams } from 'react-router-dom';
import s from './InterForm.module.css';


function InterForm() {

  const productId = useParams();



  console.log(productId)

  return (
    <div className={s.container}>
      <div className={s.mensaje}>
        <div>Su producto ha sido guardado con éxito.</div>
        <div>Pero aún faltan detalles por cargar.</div>
        <Link to={`/categoryForm/${productId.id}`}><button>Continuar</button></Link>

      </div>

    </div>
  )
}

export default InterForm