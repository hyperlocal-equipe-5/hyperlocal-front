import Title from '../../style/Title';

interface IColumnBox {
	img?: string | undefined;
	title: string;
	ingredient?: string[];
	price: number;
	description: string;
	click: () => void;
}
const ColumnBox = ({
	img,
	title,
	ingredient,
	price,
	description,
	click,
}: IColumnBox) => {
	const HandleChange = () => {};
	return (
		<div
			className="flex flex-col w-screen mobile:my-3 h-auto   overflow-x-hidden hover:cursor-pointer duration-300 hover:border-details border-box border-solid border-2 rounded-2xl"
			onClick={click}>
			<div className="flex flex-row items-center mobile:w-full   mobile:h-36  mobile:overflow-hidden px-3">
				{img ? (
					<img
						src={img}
						alt={title}
						className="bg-contain mobile:w-32 mobile:h-4/5 rounded-2xl mobile:mr-3"
					/>
				) : (
					<div className="flex items-center text-center  justify-center font-semibold text-textColor bg-box hover:text-textColor duration-300 hover:bg-details rounded-2xl mobile:text-lg mobile:w-32 mobile:h-4/5 mobile:mr-3">
						{title}
					</div>
				)}
				<div className="flex flex-col  mobile:w-full mobile:max-w-[200px] h-4/5 ">
					<Title styleInline="text-sm pb-0 px-0 pl-2 text-center">
						{title}
					</Title>
					<div className="flex flex-row">
						<p className="text-white">{description}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ColumnBox;
