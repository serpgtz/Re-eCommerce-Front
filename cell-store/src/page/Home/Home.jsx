import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SearchBar from '../../components/searchBar/searchBar'
import { getAllProducts } from '../../redux/actions'

const Home = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getAllProducts())

  }, [dispatch])

  return (
    <div>
      <SearchBar />
      <div className={s.container}>
        <h1>Productos</h1>
        <div className={s.cards}>
          {products?.map(el => {
            return (
              <div key={el._id}>
                {/* <Link key={el._id} to={`/detail/${el._id}`}>  //cuando esté la ruta de detail, agregar */}
                <Card
                  key={el._id}
                  name={el.name}
                  image={el.image}
                  price={el.price}

                />
                {/* </Link> */}
              </div >

            )
          })}
        </div>

      </div >
    </div >
  )
}

export default Home
