
import React from 'react'

function Filters() {
  
    




  
  
  
    return (
    <aside>
    
    <div>
        <div>
            <label >Lowest Health Score</label>
            <input
                type="radio"
                onChange={() => setSelectedRadio("low-score")}
                id="score"
                name="sortBy"
            ></input>
        </div>
        <h3>Ordenar por: </h3>
        <ul>
            <li>Mayor Precio</li>
            <li>Menor Precio</li>
            <li>Mejor valorado</li>
        </ul>
    </div>
    <div>
        <h3>Filtrar por:</h3>
        //Marca ------------
    </div>
   
    </aside>
  )
}

export default Filters