/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Link, useNavigate } from 'react-router-dom';
import Title from '../../style/Title';
import BoxButton from '../BoxButton';

export interface IRowBox {
	NameCategory: string;
	idCategory: string;
	Product: Array<{ ProductId: string; image: string; NameProduct: string }>;
}

const RowBox = ({ NameCategory, idCategory, Product }: IRowBox) => {
	const navigate = useNavigate();
	return (
		<div className="flex flex-col mobile:w-screen mobile:h-full mobile:overflow-y-hidden">
			<Title>
				<Link to={`/category/${idCategory}`}>{NameCategory}</Link>
			</Title>
			<div className="mobile:w-full mobile:h-full mobile:overflow-x-auto mobile:overflow-y-hidden">
				<div className="mobile:flex mobile:flex-row mobile:w-max mobile:overflow-x-auto mobile:h-full mt-2">
					{Product.map((el, i) => (
						<BoxButton
							key={i}
							img={el.image}
							title={el.NameProduct}
							click={() => navigate(`/product/${el.ProductId}`)}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default RowBox;
