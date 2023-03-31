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
			className="flex flex-col w-full max-w-[1300px] mobile:w-screen mobile:my-3 h-auto   overflow-x-hidden hover:cursor-pointer duration-300 my-3 hover:border-details border-box border-solid border-2 rounded-2xl"
			onClick={click}>
			<div className="flex px-10 flex-row items-center mobile:w-full   mobile:h-36  mobile:overflow-hidden mobile:px-3">
				{img ? (
					<img
						src={img}
						alt={title}
						className="bg-cover h-56 w-56 my-5 mobile:w-32 mobile:h-4/5 rounded-2xl mobile:mr-3"
					/>
				) : (
					<div className="flex items-center text-center h-56 w-56 my-5 justify-center font-semibold text-textColor bg-box hover:text-textColor duration-300 hover:bg-details rounded-2xl mobile:text-lg mobile:w-32 mobile:h-4/5 mobile:mr-3">
						{title}
					</div>
				)}
				<div className="flex flex-col self-start my-5 w-full max-w-[800px] pl-10 mobile:pl-0 justify-start mobile:w-full mobile:max-w-[200px] h-4/5 break-words ">
					<Title styleInline="text-xl mobile:text-sm pb-0 px-0 pl-2 text-center">
						{title}
					</Title>
					<div className="flex flex-row flex-wrap w-full h-auto">
						<p className="text-textColor h-auto w-full">{description}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ColumnBox;
