export const Container = ({ children }) => {
	return (
		<>
			<div className="container mx-auto px-[20px] md:px[50px] lg:px-[100px]">
				{children}
			</div>
		</>
	);
};
