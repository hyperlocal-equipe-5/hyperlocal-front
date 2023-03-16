import {
	ContentBox,
	ProductBox,
	ProductBoxText,
	ProductImage,
	ProductText,
	ProductTitle,
} from './styled';

interface IProductButton {
	name: string;
	img: string;
	link: string;
	ingredient: string[];
}
const ProductButton = ({ name, img, link, ingredient }: IProductButton) => {
	return (
		<>
			<ContentBox>
				<ProductBox to={link}>
					<ProductImage src={img} />
					<ProductBoxText>
						<ProductTitle>{name}</ProductTitle>
						<ProductText>
							{ingredient.map((el, i) => (
								<p key={i}>{`${el}, `}</p>
							))}
						</ProductText>
					</ProductBoxText>
				</ProductBox>
			</ContentBox>
		</>
	);
};
export default ProductButton;
