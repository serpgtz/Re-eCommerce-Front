export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';

export const addToCart = product => async dispatch => {
	// if cart already exists in local storage, use it, otherwise set to empty array
	//si el carrito ya existe en el almacenamiento local, utilícelo; de lo contrario, configúrelo en una matriz vacía
	const cart = localStorage.getItem('cart')
		? JSON.parse(localStorage.getItem('cart'))
		: [];
	console.log('product//////////////en actions addToCart///', product)
	// check if duplicates
	// comprobar si se duplica
	const duplicates = cart.filter(cartItem => cartItem._id === product._id);

	// if no duplicates, proceed
	// si no hay duplicados, proceda
	if (duplicates.length === 0) {
		// prep product data
		// preparar los datos del producto
		const productToAdd = {
			...product,
			count: 1,
		};

		// add product data to cart
		// agregar datos del producto al carrito
		cart.push(productToAdd);

		// add cart to local storage
		// agregar carro al local storage
		localStorage.setItem('cart', JSON.stringify(cart));

		// add cart to redux
		// agregar carro a redux
		dispatch({
			type: ADD_TO_CART,
			payload: cart,
		});
	}
};

export const deleteFromCart = product => async dispatch => {
	const cart = localStorage.getItem('cart')
		? JSON.parse(localStorage.getItem('cart'))
		: [];

	const updatedCart = cart.filter(cartItem => cartItem._id !== product._id);

	localStorage.setItem('cart', JSON.stringify(updatedCart));

	dispatch({
		type: DELETE_FROM_CART,
		payload: updatedCart,
	});
};
