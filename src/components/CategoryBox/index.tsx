/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useNavigate } from 'react-router-dom';
import BoxButton from '../BoxButton';
import { BoxContainer, ContentBox, TitleCategory } from './styled';

export interface ICategoryBox {
	NameCategory: string;
	idCategory: string;
	Product: Array<{ ProductId: string; image: string; NameProduct: string }>;
}

const CategoryBox = ({ NameCategory, idCategory, Product }: ICategoryBox) => {
	const navigate = useNavigate();
	return (
		<BoxContainer>
			<TitleCategory to={`/category/${idCategory}`}>
				{NameCategory}
			</TitleCategory>
			<ContentBox>
				<div className="mobile:flex mobile:flex-row mobile:w-max mobile:h-full mobile:overflow-x-auto mobile:overflow-y-hidden mt-2">
					{Product.map((el, i) => (
						<BoxButton
							key={i}
							img={el.image}
							title={el.NameProduct}
							click={() => navigate(`/product/${el.ProductId}`)}
						/>
					))}
				</div>
			</ContentBox>
		</BoxContainer>
	);
};

export default CategoryBox;
