import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import trash from '../../image/trash.png';
import s from './Favoritos.module.css';
import { useEffect } from 'react';
import corazonRojo from '../../image/corazonrojo.png'


function Favoritos() {
    const myProduct = useSelector((state) => state.product.products);
    const [likesP, setLikesP] = useState([])
    let likes = [];
    let navigate = useNavigate();


    useEffect(() => {
        if (localStorage.getItem('likes')) {
            likes = (JSON.parse(localStorage.getItem('likes')));
            setLikesP(likes);
            console.log(likes)
        }
    }, [])


    const handleGoBackBtn = () => {
        navigate('/');
    };

    const handleDeleteFavoritos = (e, id) => {
        e.preventDefault();
        // alert('El producto se quitará de tus favoritos')
        likes = likesP.filter((l) => {
            return l.id_product !== id
        })
        setLikesP(likes)
        localStorage.setItem("likes", JSON.stringify(likes))
    }

    console.log('likesP', likesP)


    return (
        <div className={s.container}>
            <section className='cart-page m-4'>
                {likesP.length <= 0 ? (
                    <div >
                        <h1 className='display-4'>
                            No hay ningún producto en favoritos{' '}
                            <button

                                onClick={handleGoBackBtn}
                            >
                                Volver
                            </button>
                        </h1>
                    </div>
                ) : (
                    <div>

                        {<div className={s.containerDiv}>
                            <div>
                                <h2 className={s.titleCart}> <img className={s.imagencarrito} src={corazonRojo} alt="carrito" />Favoritos</h2>
                                <div className={s.tableSection}>
                                    <div >


                                    </div>
                                    <table >
                                        <thead>
                                            <tr className={s.tableTh}>
                                                <th scope='col' className={s.colImage}></th>
                                                <th scope='col' className={s.colProducto}>Producto</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {likesP.map(product => (
                                                <tr key={product.id_product}>
                                                    <th scope='row'>
                                                        {' '}
                                                        <img
                                                            className={s.imgContain}
                                                            src={`${product.image}`}
                                                            alt='product'
                                                        />
                                                    </th>
                                                    <td>
                                                        <div>	{' '}
                                                            <Link
                                                                to={`/detail/${product.id_product}`}
                                                            >
                                                                {product.name}
                                                            </Link></div>

                                                        <button
                                                            className={s.btnDelete}
                                                            type='button'
                                                            onClick={e => handleDeleteFavoritos(e, product.id_product)}
                                                        >
                                                            <img className={s.imagDelete} src={trash} alt="not found" />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>}
                    </div>
                )}
            </section>
        </div>
    )
}

export default Favoritos