import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addToCart = (product) => {
		setCart((prevCart) => [...prevCart, product]);
		console.log(cart);
	};

	const removeFromCart = (id) => {
		setCart(cart.filter((cartItem) => cartItem.id !== id));
	};
	return (
		<div>
			<CartContext.Provider value={{ addToCart, cart, removeFromCart }}>
				{children}
			</CartContext.Provider>
		</div>
	);
};
