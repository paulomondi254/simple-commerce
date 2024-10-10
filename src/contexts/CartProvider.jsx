import { useToast } from "@chakra-ui/react";
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const toast = useToast();

	const addToCart = (product) => {
		setCart((prevCart) => [...prevCart, product]);

		return toast({
			position: "top-center",
			title: "Added to Cart",
			description: "Your Product has been added to cart",
			status: "success",
			duration: 4000,
			isClosable: true,
		});
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
