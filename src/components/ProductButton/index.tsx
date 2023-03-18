import {
	ContentBox,
	ProductBox,
	ProductBoxText,
	ProductImage,
	ProductTitle,
} from './styled';

interface IProductButton {
	name: string;
	img: string;
	ProductId: string;
	ingredient?: string[];
}
const ProductButton = ({
	name,
	img,
	ProductId,
	ingredient,
}: IProductButton) => {
	return (
		<>
			<ContentBox>
				<ProductBox to={`/product/${ProductId}`}>
					<ProductImage src={img} />
					<ProductBoxText>
						<ProductTitle>{name}</ProductTitle>
						{/* <ProductText>
							{ingredient.map((el, i) => (
								<p key={i}>{`${el}, `}</p>
							))}
						</ProductText> */}
					</ProductBoxText>
				</ProductBox>
			</ContentBox>
		</>
	);
};
export default ProductButton;
