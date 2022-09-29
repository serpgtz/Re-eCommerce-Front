import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import * as actions from '../../redux/actions';



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
        countInStock: '',
        image: '',
        exist: true,
    });
    
    const [error, setError] = useState({})
    
    useEffect(()=>{

    },[])


    const handleChange = (e)=>{

        setForm({
            ...form,
            [e.target.name] : validation(e.target.value, e.target.name) || ' '
        })
        
    }



    const handleSubmit= (e)=>{
        e.preventDefault()

        let data = {...form}
        dispatch(actions.postProduct(data, navigate))
        

    }

    const validation = (value, target)=>{

    
        if((!/^[A-Za-z0-9\s]+$/g.test(value) && target === 'name') && value.length > 1) {

            return setError({
                [target] : 'Contiene caracteres especiales.'
            })

        }
        if((value > 500000 || value < 0 )&& target === 'price'){
            return setError({
                [target] : 'limite exedido'
            })
        }
        if(value.length > 250 && target === 'description' || value.length < 50 && target === 'description'){

            return setError({
                [target] : 'Excede los limites de 50 a 250 Caracteres para descripcion.'
            })

        }



        setError({})
        return value
    }


    console.log(form)
    console.log(form.description.length)
    

  return (

    <section>
        <div>
        <h2>Nuevo Producto</h2>
            <form name='product' onSubmit={handleSubmit}>
                <p>
                    <span>Modelo</span>
                    <input id="nameProduct" type={'text'} name={'name'} placeholder={'Nombre de la actividad'} onChange={handleChange}/>
                    {error.name && <span> {error.name}</span>}
                </p>
                <p>
                    <span>Precio</span>
                    <input id='priceProduct' type={'number'} name={'price'} placeholder={'$$$'} onChange={handleChange} />
                    {error.price && <span> {error.price}</span>}
                
                </p>
                <p>
                    <span>Descripcion</span>
                    <textarea id='descriptionProduct' name='description' placeholder='Descripcion' onChange={handleChange} ></textarea>
                    {error.description && <span> {error.description}</span>}
                </p>
                <p>
                    <span >Stock</span>
                    <input id='stockProduct' name='stock' type={'number'} placeholder={'N° de Unidades'} onChange={handleChange}/>
                    
                </p>
                <p>
                    <span >En Stock</span>
                    <input id='countInStockProduct' name='countInStock'  type={'number'} placeholder={'N° de Unidades'} onChange={handleChange}/>
                    
                </p>
                <p>
                    <span>URL Imagen</span>
                    <input id='imageProduct' name='image' type={'url'} onChange={handleChange} />
                    {
                        /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/.test(form.image) ?
                         <img id='showImage' src={form.image} alt={`Foto de ${form.name}`}></img> 
                         : <></>
                    }
                    
                </p>
                <p>
                    <span>Estado</span>
                    <select id='existProduct' name='exist' onChange={handleChange}>
                        <option value={true}>Visible</option>
                        <option value={false}>Oculto</option>
                    </select>
                    
                </p>
                <p>
                    <input type={'submit'} value={'Guardar Producto'}/>
                </p>
            </form>
        </div>
    </section>
    
  )
}

export default ProductForm