import { Link } from 'react-router-dom';

interface IProductButton {
	name: string;
	img: string;
	ProductId: string;
	ingredient: string[];
}
const ProductButton = ({
	name,
	img,
	ProductId,
	ingredient,
}: IProductButton) => {
	return (
		<>
			<div className="mobile:w-full mobile:h-auto mobile:overflow-x-hidden mobile:overflow-y-auto">
				<Link
					className="flex flex-row  w-full h-auto px-4 py-3 border-b-[1px] border-solid border-box"
					to={`/product/${ProductId}`}>
					<img className="mobile:h-24 mobile:w-24" src={img} />
					<div className="flex flex-col items-start max-w-full h-full">
						<h2 className="text-details text-xl font-semibold px-4">{name}</h2>
						<div className="mobile:flex mobile:flex-row mobile:flex-wrap  mobile:w-56 mobile:h-auto text-sm text-justify px-4">
							{ingredient.map((el, i) => (
								<p key={i}>{`${el}, `}</p>
							))}
						</div>
					</div>
				</Link>
			</div>
		</>
	);
};
export default ProductButton;
