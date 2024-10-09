import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import { AppLayout } from "./layouts/AppLayout.jsx";
import { Home } from "./pages/Home.jsx";
import { ProductDetails } from "./components/ProductDetails.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { CartProvider } from "./contexts/CartProvider.jsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<AppLayout />}>
			<Route path="/" element={<Home />} />
			<Route path="/product/:id" element={<ProductDetails />} />
		</Route>
	)
);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ChakraProvider>
			<CartProvider>
				<RouterProvider router={router} />
			</CartProvider>
		</ChakraProvider>
	</StrictMode>
);
