import React from 'react'
import Cards from '../../components/cards-products/Cards'
import Paginado from '../../components/Paginado/Paginado'

const CardPagination = () => {
  return (
    <div>
          <Paginado />
      <Cards />
      <Paginado />

    </div>
  )
}

export default CardPagination
