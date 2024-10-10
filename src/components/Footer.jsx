import { Container } from "./Container";
import { SiCssdesignawards } from "react-icons/si";

export const Footer = () => {
	return (
		<>
			<div className="mb-[20px] mt-[20px]">
				<Container>
					<div className="shadow-lg min-h-[100px] rounded-lg flex items-center px-[20px]">
						<div className="flex justify-between flex-wrap gap-5 items-center w-full">
							<div className="hidden md:block">
								<div className="flex items-center gap-2">
									<SiCssdesignawards className="fill-green-400 text-lg md:text-4xl" />
									<p className="font-bold text-lg md:text-2xl">
										Wear<span className="text-green-400">.</span>
									</p>
								</div>
							</div>
							<div>
								<div className="flex gap-2 items-center">
									<p className="font-semibold md:text-lg">&copy; Paul Omondi</p>
									<img
										className="w-[20px] md:w-[30px]"
										src="/images/kenya.png"
										alt="kenyan flag"
									/>
								</div>
							</div>
							<div>
								<p className="font-bold md:text-lg">
									<span>Frontend</span>{" "}
									<span className="text-green-400">Dev.</span>
								</p>
							</div>
						</div>
					</div>
				</Container>
			</div>
		</>
	);
};
