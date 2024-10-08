import { Link } from "react-router-dom";
import { Container } from "./Container";
import { SiCssdesignawards } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";

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
						<div className="relative cursor-pointer">
							<button>
								<HiOutlineShoppingBag className="font-bold text-3xl" />
							</button>
							<div>
								<div className="absolute right-0 bottom-[0] bg-red-600 w-[18px] h-[18px] rounded-full flex justify-center items-center font-semibold text-white text-xs">
									0
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
};
