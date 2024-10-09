import { DrawerCloseButton, useDisclosure } from "@chakra-ui/react";
import {
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerHeader,
	DrawerBody,
} from "@chakra-ui/react";
import { HiOutlineShoppingBag } from "react-icons/hi2";

export const Cart = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<div className="relative cursor-pointer" onClick={onOpen}>
				<button>
					<HiOutlineShoppingBag className="font-bold text-3xl" />
				</button>
				<div>
					<div className="absolute right-0 bottom-[0] bg-red-600 w-[18px] h-[18px] rounded-full flex justify-center items-center font-semibold text-white text-xs">
						0
					</div>
				</div>
			</div>
			<Drawer placement="right" onClose={onClose} isOpen={isOpen} size="md">
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
					<DrawerBody>
						<p>Some contents...</p>
						<p>Some contents...</p>
						<p>Some contents...</p>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};
