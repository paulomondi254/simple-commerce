import {
	Button,
	DrawerCloseButton,
	DrawerFooter,
	useDisclosure,
} from "@chakra-ui/react";
import {
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerHeader,
	DrawerBody,
} from "@chakra-ui/react";
import { useContext } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CartContext } from "../contexts/CartProvider";
import { IoClose } from "react-icons/io5";

export const Cart = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { cart, removeFromCart } = useContext(CartContext);
	return (
		<>
			<div className="relative cursor-pointer" onClick={onOpen}>
				<button>
					<HiOutlineShoppingBag className="font-bold text-3xl" />
				</button>
				<div>
					<div className="absolute right-0 bottom-[0] bg-red-600 w-[18px] h-[18px] rounded-full flex justify-center items-center font-semibold text-white text-xs">
						{cart.length}
					</div>
				</div>
			</div>
			<Drawer placement="right" onClose={onClose} isOpen={isOpen} size="md">
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader borderBottomWidth="1px">
						Shopping Cart({cart.length})
					</DrawerHeader>
					<DrawerBody>
						<div>
							{cart.length === 0 ? (
								<p>Your Cart is Empty</p>
							) : (
								cart.map((cartItem) => (
									<div
										key={cartItem.id}
										className="grid grid-cols-4 gap-4 mb-4"
									>
										<div>
											<img
												className="w-full h-[80px] object-contain"
												src={cartItem.image}
												alt={cartItem.title}
											/>
										</div>
										<div className="col-span-2">{cartItem.title}</div>
										<div>
											<div>
												<Button
													size="xs"
													onClick={() => removeFromCart(cartItem.id)}
												>
													<IoClose className="text-lg" />
												</Button>
												<p className="pt-3 font-semibold">${cartItem.price}</p>
											</div>
										</div>
									</div>
								))
							)}
						</div>
					</DrawerBody>
					<DrawerFooter>
						<Button
							w="full"
							size="lg"
							bg="black"
							color="white"
							_hover={{ bg: "black" }}
						>
							Checkout
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
};
