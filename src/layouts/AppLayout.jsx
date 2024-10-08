import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const AppLayout = () => {
	return (
		<div>
			<div>
				<Navbar />
			</div>
			<div>
				<Outlet />
			</div>
		</div>
	);
};
