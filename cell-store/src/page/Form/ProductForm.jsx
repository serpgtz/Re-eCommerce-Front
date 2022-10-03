import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

import * as actions from '../../redux/actions/productActions';
import styles from './ProductForm.module.css';

//Finalizar validaciones(url, stock, etc), verificar inputs

function ProductForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: '',
        price: '',
        description: '',
        comment: '',
        stock: '',
        image: '',
        exist: true,
    });
    const [error, setError] = useState({})

    useEffect(() => {
        //??????????????????????????????????????
    }, [])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: validation(e.target.value, e.target.name) || ' '
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        let data = { ...form }
        dispatch(actions.postProduct(data, navigate))
    }

    const validation = (value, target) => {
        console.log('target', target)
        if ((!/^[A-Za-z0-9\s]+$/g.test(value) && target === 'name') && value.length > 1) {
            return setError({
                [target]: 'No se aceptan caracteres especiales en el nombre del producto.'
            })
        }
        if ((value < 0) && target === 'price') {
            return setError({
                [target]: 'El precio no puede ser de valor negativo'
            })
        }
        if (value.length > 1000 && target === 'description' || value.length < 50 && target === 'description') {
            return setError({
                [target]: 'La descripción admite un mínimo de 50 caracteres y un máximo de 1000.'
            })
        }
        if (!/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|webp)/.test(value) && target === 'image') {
            return setError({
                [target]: 'Debe ingresar una url válida.'
            })
        }
        if ((value < 0) && target === 'stock') {
            return setError({
                [target]: 'No se aceptan números negativos'
            })
        }
        setError({})
        return value
    }

    console.log(form)
    console.log(form.description.length)

    return (

        <section>
            <div className={styles.container} >
                <Link className={styles.link} to="/">
                    BACK TO HOME
                </Link>
                <h2>Nuevo Producto</h2>
                <div className={styles.form}>
                    <form name='product' onSubmit={handleSubmit}>
                        <p>
                            <span>Nombre del producto</span>
                            <input id="nameProduct" type={'text'} name={'name'} placeholder={'Nombre del producto'} onChange={handleChange} />
                            {error.name && <span className={styles.error}> {error.name}</span>}
                        </p>
                        <p>
                            <span>Precio</span>
                            <input id='priceProduct' type={'number'} name={'price'} placeholder={'$$$'} onChange={handleChange} />
                            {error.price && <span className={styles.error}> {error.price}</span>}
                        </p>
                        <p>
                            <span>Descripción</span>
                            <textarea id='descriptionProduct' name='description' placeholder='Descripción' onChange={handleChange} ></textarea>
                            {error.description && <span className={styles.error}> {error.description}</span>}
                        </p>
                        <p>
                            <span >Stock</span>
                            <input id='stock' name='stock' type={'number'} placeholder={'N° de unidades'} onChange={handleChange} />
                            {error.stock && <span className={styles.error}> {error.stock}</span>}
                        </p>
                        <p>
                            <span>URL Imagen</span>
                            <input id='imageProduct' name='image' type={'url'} placeholder={'URL...'} onChange={handleChange} />
                            {
                                /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/.test(form.image) ?
                                    <p> <img className={styles.imageProduct} id='showImage' src={form.image} alt={`Foto de ${form.name}`}></img></p>

                                    : <></>
                            }
                        </p>
                        <p>
                            <span>Estado </span>
                            <select className={styles.btnEstado} id='existProduct' name='exist' onChange={handleChange}>
                                <option value={true}>Visible</option>
                                <option value={false}>Oculto</option>
                            </select>
                        </p>
                        <p>
                            <input className={styles.btn} type={'submit'} value={'Guardar Producto'} />
                        </p>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ProductForm