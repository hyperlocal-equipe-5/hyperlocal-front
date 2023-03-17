/* eslint-disable @typescript-eslint/restrict-template-expressions */
import {
	BoxContainer,
	ContentBox,
	Image,
	ProductBox,
	ScrollBox,
	Title,
	TitleCategory,
} from './styled';

export interface ICategoryBox {
	NameCategory: string;
	idCategory: string;
	Product: Array<{ ProductId: string; image: string; NameProduct: string }>;
}

const CategoryBox = ({ NameCategory, idCategory, Product }: ICategoryBox) => {
	return (
		<BoxContainer>
			<TitleCategory to={`category/${idCategory}`}>
				{NameCategory}
			</TitleCategory>
			<ContentBox>
				<ScrollBox>
					{Product.map((el, i) => (
						<ProductBox key={i} to={`/product/${el.ProductId}`}>
							<Image src={el.image} />
							<Title>{el.NameProduct}</Title>
						</ProductBox>
					))}
				</ScrollBox>
			</ContentBox>
		</BoxContainer>
	);
};

export default CategoryBox;
