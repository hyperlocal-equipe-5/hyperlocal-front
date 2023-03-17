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
	LinkCategory: string;
	Product: Array<{ LinkProduct: string; image: string; NameProduct: string }>;
}

const CategoryBox = ({ NameCategory, LinkCategory, Product }: ICategoryBox) => {
	return (
		<BoxContainer>
			<TitleCategory to={`/category/${LinkCategory}`}>
				{NameCategory}
			</TitleCategory>
			<ContentBox>
				<ScrollBox>
					{Product.map((el, i) => (
						<ProductBox key={i} to={`/${el.LinkProduct}`}>
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
