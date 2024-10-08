import { useEffect, useState } from "react";
import { Container } from "./Container";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export const Products = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((data) => setProducts(data))
			.catch((err) => console.log(err));
	}, []);
	console.log(products);
	return (
		<>
			<Container>
				<div>
					<div>
						<p className="text-center text-[1.875em] font-semibold">
							<span>Pro</span>
							<span className="text-green-400">ducts</span>
						</p>
					</div>
					<div className="py-[50px]">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							{products.map((product) =>
								product.category === "jewelery" ||
								product.category === "electronics" ? null : (
									<div key={product.id} className="shadow-md rounded-md py-4">
										<Link to={"/product/" + product.id}>
											<div>
												<div>
													<img
														className="w-full h-[200px] object-contain"
														src={product.image}
														alt={product.title}
													/>
												</div>
												<div className="p-3">
													<p className="font-semibold text-sm text-gray-400">
														{product.category}
													</p>
													<div className="py-4">
														<p className="line-clamp-1 text-[18px] font-semibold">
															{product.title}
														</p>
													</div>
													<div>
														<div className="flex items-center justify-between">
															<div>
																<p className="font-bold text-xl text-green-400">
																	${product.price}
																</p>
															</div>
															<div className="flex items-center gap-1">
																<div>
																	<FaStar className="fill-yellow-400" />
																</div>
																<div className="font-semibold text-gray-400">
																	{product.rating.rate}
																</div>
																<div className="text-gray-200">|</div>
																<div className="font-semibold text-gray-400">
																	{product.rating.count}
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</Link>
									</div>
								)
							)}
						</div>
					</div>
				</div>
			</Container>
		</>
	);
};
