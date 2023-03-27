interface IBoxButton {
	img: string;
	title: string;
	click: () => void;
}
const BoxButton = ({ img, title, click }: IBoxButton) => {
	return (
		<>
			<div
				className="flex flex-col items-center justify-center bg-contain cursor-pointer w-72 h-72 mobile:w-40 mobile:h-40 mr-3 ml-3 text-textColor rounded-2xl border border-solid border-box hover:border-details"
				onClick={click}>
				<img
					className="w-full h-full bg-details rounded-t-xl"
					src={img}
					alt={title}
				/>
				<h2 className="flex text-base text-textColor text-center font-semibold my-4 mobile:my-1">
					{title}
				</h2>
			</div>
		</>
	);
};

export default BoxButton;
