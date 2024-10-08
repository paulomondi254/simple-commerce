import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "./Container";
import { Tag } from "./Tag";
import { Button } from "./Button";

export const ProductDetails = () => {
	const params = useParams();
	const [product, setProduct] = useState({});

	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${params.id}`)
			.then((res) => res.json())
			.then((data) => setProduct(data))
			.catch((err) => console.log(err));
	}, [params.id]);

	console.log(product);

	return (
		<>
			<Container>
				<div className="w-full min-h-[90vh] flex justify-center items-center">
					<div className="py-5">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
							<div>
								<img
									className="object-contain"
									src={product.image}
									alt={product.title}
								/>
							</div>
							<div className="flex items-center">
								<div>
									<Tag>{product.category}</Tag>
									<div className="py-3 lg:py-5">
										<p className="text-[1.375em] md:text-[1.75em] lg:text-[2.188em] font-semibold">
											{product.title}
										</p>
									</div>
									<div>
										<p className="text-[1.75em] font-semibold text-green-400">
											${product.price}
										</p>
									</div>
									<div className="py-3 lg:py-5">
										<p className="leading-loose text-xl text-gray-400">
											{product.description}
										</p>
									</div>
									<div>
										<Button>Add to Cart</Button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
};
