export const Button = ({ children }) => {
	return (
		<>
			<button className="bg-black py-3 px-7 text-white rounded-md font-semibold">
				{children}
			</button>
		</>
	);
};
