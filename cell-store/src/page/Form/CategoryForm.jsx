import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import * as actions from '../../redux/actions/productActions';
import Card from '../../components/cards-products/Card';
import s from './CategoryForm.module.css';

function CategoryForm() {
    const product = useParams();
    const data = useSelector(state => state.detail);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const location = useLocation();
    location.pathname
    const [form, setForm] = useState({
        product: product.id,
        brand: '',
        model: '',
        cell: false,
        case: false,
        headphones: false,
        charger: false,
        screen: '',
        freeShipping: false,
        ram: '',
        storageSsd: '',
        systemOp: 'Android',
        onSale: false,
    });

    useEffect(() => {
        dispatch(actions.getDetailId(product.id))
    }, [])
    const handleChange = (e) => {

        return setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        let data = {
            ...form,
            cell: !!form.cell,
            case: !!form.case,
            headphones: !!form.headphones,
            charger: !!form.charger,
            freeShipping: !!form.freeShipping,
            onSale: !!form.onSale,
        }
        dispatch(actions.postCategory(data, navigate, location))
    }
    console.log(form.ram)
    return (
        <section className={s.container}>
            <div>
                <p>Producto Creado</p>
                {
                    !data ? <p>Loading..</p> : <Card
                        key={data._id}
                        name={data.name}
                        image={data.image}
                        price={data.price}
                    />
                }
            </div>
            <div className={s.form}>
                <h3>Formulario categoría</h3>
                <div>
                    <form onSubmit={handleSubmit}>
                        <p>
                            <span>Marca</span>
                            <input id='brandCategory' name='brand' type={'text'} onChange={handleChange} />
                        </p>
                        <p>
                            <span>Modelo</span>
                            <input id='modelCategory' name='model' type={'text'} onChange={handleChange} />
                        </p>
                        <p>
                            <span>Celular</span>
                            <input id='cellCategory' name='cell' type={'radio'} value={true} onChange={handleChange} />
                        </p>
                        <p>
                            <span>Funda</span>
                            <input id='caseCategory' name='case' type={'radio'} value={true} onChange={handleChange} />
                        </p>
                        <p>
                            <span>Auriculares</span>
                            <input id='headphonesCategory' name='headphones' type={'radio'} value={true} onChange={handleChange} />
                        </p>
                        <p>
                            <span>Cargador</span>
                            <input id='chargerCategory' name='charger' type={'radio'} value={true} onChange={handleChange} />
                        </p>
                        <p>
                            <span>Pantalla</span>
                            <input id='screenCategory' name='screen' type={'number'} onChange={handleChange} />
                        </p>
                        <p>
                            <span>Ram</span>
                            <input id='ramCategory' name='ram' type={'range'} min={0} max={16} step={2} onChange={handleChange} />
                            <output>{form.ram}</output>
                        </p>
                        <p>
                            <span>SD</span>
                            <select id='storageSsdCategory' name='storageSsd' onChange={handleChange}>
                                <option value={32}>32GB</option>
                                <option value={64}>64GB</option>
                                <option value={128}>128GB</option>
                            </select>
                        </p>
                        <p>
                            <span>Envío gratis</span>
                            <input id='freeShippingCategory' name='freeShipping' type={'radio'} value={true} onChange={handleChange} />
                        </p>
                        <p>
                            <span>Sistema operativo</span>
                            <select id='systemOpCategory' name='systemOp' onChange={handleChange}>
                                <option value={'Android'}>Android</option>
                                <option value={'IOS'}>IOS</option>
                                <option value={'WinMobile'}>WinMobile</option>
                            </select>
                        </p>
                        <p>
                            <span>Oferta</span>
                            <input id='onSaleCategory' name='onSale' type={'radio'} value={true} onChange={handleChange} />
                        </p>
                        <input type={'submit'} placeholder={'Enviar'} />
                    </form>
                </div>
            </div>

        </section>
    )
}
export default CategoryForm