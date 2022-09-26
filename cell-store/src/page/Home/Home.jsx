import React from 'react'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getAllProducts } from '../../redux/actions'

const Home = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)

    useEffect(()=> {
        dispatch(getAllProducts())

    },[dispatch])

  return (
    <div>
       <h1>Productos</h1>
       {products?.map(el => {
        return (
          <div key={el._id}>

            <img src={el.image} alt={el.name}></img>
            <h2>{el.name}</h2>
            <p>{el.description}</p>
            <h4>{el.price}</h4>
            <h4>{el.stock}</h4>
          </div>

        )
       })}
    </div>
  )
}

export default Home
