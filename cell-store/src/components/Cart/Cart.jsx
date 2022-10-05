import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ADD_TO_CART } from '../../redux/actions/cartActions';
import { deleteFromCart } from '../../redux/actions/cartActions';
import trash from '../../image/trash.png';
import s from './Cart.module.css';

function Cart() {

	let navigate = useNavigate();
	const { cart } = useSelector(state => state.cart);

	const dispatch = useDispatch();

	const handleGoBackBtn = () => {
		navigate(-1);
	};

	const handleQtyChange = (e, product) => {
		const cart = localStorage.getItem('cart')
			? JSON.parse(localStorage.getItem('cart'))
			: [];

		cart.forEach(cartItem => {
			if (cartItem._id === product._id) {
				cartItem.count = e.target.value;
			}
		});

		localStorage.setItem('cart', JSON.stringify(cart));

		dispatch({
			type: ADD_TO_CART,
			payload: cart,
		});
	};

	const handleCheckout = evt => {
		if (isAuthenticated()) {
			navigate('/shipping');
		} else {
			navigate('/signin?redirect=shipping');
		}
	};

  return (
	<div>
		<section className='cart-page m-4'>
			{cart.length <= 0 ? (
				<div >
					<h1 className='display-4'>
						Your cart is empty{' '}
						<button
							
							onClick={handleGoBackBtn}
						>
							Go Back
						</button>
					</h1>
				</div>
			) : (
				<div>
					<div >
						<h1 >Cart</h1>
					</div>
					{<div >
						<div >
							<table >
								<thead>
									<tr>
										<th scope='col'></th>
										<th scope='col'>Product</th>
										<th scope='col'>Price</th>
										<th scope='col'>Quantity</th>
										<th scope='col'>Remove</th>
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
												{product.price.toLocaleString(
													'en-US'
												)}
											</td>
											<td>
												<input
													type='number'
													min='1'
													max={product.productQty}
													value={product.count}
													onChange={e =>
														handleQtyChange(
															e,
															product
														)
													}
												/>
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
						<div className='col-md-4 border-left pl-4'>
							<h2>Cart Summary</h2>
							<p className='font-weight-light text-muted border-bottom'>
								{cart.length === 1
									? '(1) Item'
									: `(${cart.length}) Items`}
							</p>
							<p >
								Total: $
								{cart
									.reduce(
										(currentSum, currentCartItem) =>
											currentSum +
											currentCartItem.count *
												currentCartItem.price,
										0
									)									
									.toFixed(2)
									}
							</p>
							<button
								className='btn btn-dark btn-large btn-block mb-5 py-2'
								onClick={handleCheckout}
							>
								Proceed to Checkout
							</button>
						</div>
					</div>}
				</div>
			)}
		</section>
	</div>
  )
}

export default Cart