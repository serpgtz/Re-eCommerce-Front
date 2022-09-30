import React from 'react'
import {Link, useParams} from 'react-router-dom';



function InterForm() {
  
    const productId = useParams();
  
  
  
    console.log(productId)
    
    return (
    <div>
        <p>Su Producto a sido guardado con exito.</p>
        <p>Pero aun faltan detalles por cargar.</p>
        <Link to={`/categoryForm/${productId.id}`}>Continuar</Link>
    </div>
  )
}

export default InterForm