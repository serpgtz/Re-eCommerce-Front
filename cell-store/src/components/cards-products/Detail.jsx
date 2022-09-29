import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailId, resetState } from '../../redux/actions';
import { useEffect } from 'react';
import styles from './Detail.module.css';

function Detail() {

  const dispatch = useDispatch();

  const { _id } = useParams()

  useEffect(() => {
    dispatch(getDetailId(_id));

    return () => {
      dispatch(resetState())
    };

  }, [dispatch, _id])

  const myProduct = useSelector((state) => state.detail)

  return (
    <div>
      <div className={styles.nav}>
        <li className={styles.li}><Link to='/home'>BACK TO HOME</Link></li>
      </div>
      <div className={styles.container}>
        {myProduct.err ?
          <div className={styles.error404}>
            <Link to='/home'>
              <img src="https://png.pngtree.com/png-clipart/20190925/original/pngtree-404-error-or-not-found-button-icon--in-gray-background-png-image_4962266.jpg" alt="Not found" />
            </Link>
          </div>
          :
          myProduct ?
            <div >


              <div className={styles.cardDetail}>
                <img src={myProduct.image} alt="not fount" />
                <h3 className={styles.titleone} >{myProduct.name}</h3>
                <p className={styles.letter}><strong>$</strong>{myProduct.price}</p>
                <p className={styles.letter}><strong>Description : </strong>{myProduct.description}</p>
                <p className={styles.letter}><strong>stock : </strong>{myProduct.stock}unids.</p>
              </div>



            </div> : <img src="https://aquamarineexotic.com/adminpanel/assets/images/page-loading-old.gif" alt="loading" />

        }
      </div>

    </div>
  )
}

export default Detail

/* /products */