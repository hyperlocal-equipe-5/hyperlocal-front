import { AiOutlineShoppingCart } from 'react-icons/ai';
import CheckBox from '../../components/CheckBox';
import {
	CartButton,
	Container,
	ContentBox,
	Cover,
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
				<CheckBox id="item1" name="Item 1" />
				<CheckBox id="item2" name="Item 2" />
				<CheckBox id="item3" name="Item 3" />
				<CheckBox id="item4" name="Item 4" />
				<CheckBox id="item5" name="Item 5" />
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
