import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ADD_TO_CART } from '../../redux/actions/cartActions';
import { deleteFromCart } from '../../redux/actions/cartActions';
import trash from '../../image/trash.png';
import carrito from '../../image/carrito.png';
import s from './Cart.module.css';

function Cart() {
	let value = 0;
	let navigate = useNavigate();
	const { cart } = useSelector(state => state.cart);

	const dispatch = useDispatch();

	const handleGoBackBtn = () => {
		navigate('/');
	};

	// const handleQtyChange = (e, product) => {
	// 	const cart = localStorage.getItem('cart')
	// 		? JSON.parse(localStorage.getItem('cart'))
	// 		: [];

	// 	cart.forEach(cartItem => {
	// 		if (cartItem._id === product._id) {
	// 			cartItem.count = e.target.value;
	// 		}
	// 	});

	// 	localStorage.setItem('cart', JSON.stringify(cart));

	// 	dispatch({
	// 		type: ADD_TO_CART,
	// 		payload: cart,
	// 	});
	// };
	const handleQtyClick = (e, product) => {
		if (e.target.name === '+') {
			console.log('entré en +')
			value = product.count + 1;
			if (value > product.stock) {
				value = product.stock;
			}
		}
		else {
			console.log('entré en -')
			value = product.count - 1;
			if (value < 1) {
				value = 1;
			}
		}
		const cart = localStorage.getItem('cart')
			? JSON.parse(localStorage.getItem('cart'))
			: [];

		cart.forEach(cartItem => {
			if (cartItem._id === product._id) {
				cartItem.count = value;
			}
		});
		localStorage.setItem('cart', JSON.stringify(cart));

		dispatch({
			type: ADD_TO_CART,
			payload: cart,
		});
	}
	const handleCheckout = evt => {
		if (isAuthenticated()) {
			navigate('/shipping');
		} else {
			navigate('/signin?redirect=shipping');
		}
	};

	return (
		<div className={s.container}>
			<section className='cart-page m-4'>
				{cart.length <= 0 ? (
					<div >
						<h1 className='display-4'>
							El carrito está vacío{' '}
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
							<div className={s.tableSection}>
								<div >

									<h2 > <img className={s.imagencarrito} src={carrito} alt="carrito" /> Carrito</h2>
								</div>
								<table >
									<thead>
										<tr className={s.tableTh}>
											<th scope='col'></th>
											<th scope='col'>Producto</th>
											<th scope='col'>Precio</th>
											<th scope='col'>Cantidad</th>
											<th scope='col'>Eliminar</th>
										</tr>
									</thead>
									<tbody>
										{cart.map(product => (
											<tr key={product._id}>
												<th scope='row'>
													{' '}
													<img
														className={s.imgContain}
														src={`${product.image}`}
														alt='product'
													/>
												</th>
												<td>
													{' '}
													<Link
														to={`/detail/${product._id}`}
													>
														{product.name}
													</Link>
												</td>
												<td>
													{' '}
													${product.price.toLocaleString('es')}
												</td>
												<td>
													<button onClick={e => handleQtyClick(e, product)} name='-'>-</button>
													{' '}<label>{product.count}</label>{' '}
													<button onClick={e => handleQtyClick(e, product)} name='+'>+</button>
													{/* <input
														type='number'
														min='1'
														max={product.stock}
														value={product.count}
														onChange={e =>
															handleQtyChange(
																e,
															product
															)
														}
													/> */}
												</td>
												<td>
													{' '}
													<button
														className={s.btnDelete}
														type='button'
														onClick={() =>
															dispatch(
																deleteFromCart(
																	product
																)
															)
														}
													>
														<img className={s.imagDelete} src={trash} alt="not found" />
													</button>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
							<div className={s.summary}>
								<h2>Total</h2>
								<p className={s.item}>
									{cart.length === 1
										? '(1) Item'
										: `(${cart.length}) Items`}
								</p>
								<p className={s.precio} >
									Total: $
									{cart
										.reduce(
											(currentSum, currentCartItem) =>
												currentSum +
												currentCartItem.count *
												currentCartItem.price,
											0
										)
										/* .toFixed(2) */
										.toLocaleString('es', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
									}
								</p>
								<div>
									<button
										className={s.btnCheck}
										onClick={handleCheckout}
									>
										Proceder a la compra
									</button>
									<button
										className={s.btnSeguirComp}
										onClick={handleGoBackBtn}
									>
										Agregar más productos
									</button>
								</div>
							</div>
						</div>}
					</div>
				)}
			</section>
		</div>
	)
}

export default Cart