interface IBoxButton {
	img?: string | undefined;
	title: string;
	click: () => void;
}

const BoxButton = ({ img, title, click }: IBoxButton) => {
	return (
		<>
			<div
				className="flex flex-col items-center justify-center bg-contain cursor-pointer w-72 h-72 mobile:w-40 mobile:h-40 mr-3 ml-3 text-textColor rounded-2xl border border-solid border-box hover:border-details"
				onClick={click}>
				{img !== '' ? (
					<img
						className="w-full h-full bg-box rounded-t-xl"
						src={img}
						alt={title}
					/>
				) : (
					<div className="flex items-center justify-center w-full h-full bg-box hover:text-textColor duration-300 hover:bg-details rounded-t-xl text-3xl mobile:text-xl font-semibold">
						{title}
					</div>
				)}
				<h2 className="flex text-2xl mobile:text-base text-textColor text-center  font-semibold my-2 mobile:my-1">
					{title}
				</h2>
			</div>
		</>
	);
};

export default BoxButton;
