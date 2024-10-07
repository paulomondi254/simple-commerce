import { Button } from "./Button";
import { Container } from "./Container";
import { Tag } from "./Tag";

export const Hero = () => {
	return (
		<>
			<Container>
				<div className="py-[50px]">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
						<div>
							<div className="md:min-h-[50vh] flex md:items-center lg:items-center">
								<div>
									<Tag>elegance</Tag>
									<p className="text-[2.188em] font-semibold pt-[10px]">
										Unleash Your Inner Fashionista
									</p>
									<p className="text-[1.125em] py-[20px] text-gray-400 leading-[30px]">
										Find the perfect blend of elegance and trendiness in our
										collection. Shop now and transform your look
									</p>
									<Button>Get Started</Button>
								</div>
							</div>
						</div>
						<div>
							<div className="flex justify-center items-center w-full bg-gray-300 rounded-md min-h-[50vh]">
								<img
									className="object-contain"
									src="/images/hoodie.png"
									alt="hoodie"
								/>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
};
// w-[300px] md:w-[300px] lg:w-[500px]
