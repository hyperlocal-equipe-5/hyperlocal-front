import { AiOutlineShoppingCart } from 'react-icons/ai';
import {
	CartButton,
	Container,
	ContentBox,
	Cover,
	ItemName,
	Price,
	PriceBox,
	ProductTitle,
} from './styled';

const ProductPage = () => {
	return (
		<Container>
			<Cover src="" />
			<ContentBox>
				<ProductTitle>teste</ProductTitle>
				<ItemName type="checkbox" name="Teste" />
				<ItemName type="checkbox" name="Teste" />
				<ItemName type="checkbox" name="Teste" />
				<ItemName type="checkbox" name="Teste" />
				<ItemName type="checkbox" name="Teste" />
			</ContentBox>
			<PriceBox>
				<Price>R$ 22,54</Price>
				<CartButton type="button">
					<AiOutlineShoppingCart />
				</CartButton>
			</PriceBox>
		</Container>
	);
};
export default ProductPage;
