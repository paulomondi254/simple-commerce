import { Outlet } from "react-router-dom";

export const AppLayout = () => {
	return (
		<div>
			<div></div>
			<div>
				<Outlet />
			</div>
		</div>
	);
};
