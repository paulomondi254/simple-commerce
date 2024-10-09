import { Link } from "react-router-dom";
import { Container } from "./Container";
import { SiCssdesignawards } from "react-icons/si";
import { Cart } from "./Cart";

export const Navbar = () => {
	return (
		<>
			<Container>
				<div className="py-3">
					<div className="flex justify-between items-center">
						<Link to="/">
							<div className="flex items-center gap-2">
								<SiCssdesignawards className="fill-green-400 text-4xl" />
								<p className="font-bold text-2xl">
									Wear<span className="text-green-400">.</span>
								</p>
							</div>
						</Link>
						<Cart />
					</div>
				</div>
			</Container>
		</>
	);
};
