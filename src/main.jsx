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

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<AppLayout />}>
			<Route path="/" element={<Home />} />
		</Route>
	)
);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
