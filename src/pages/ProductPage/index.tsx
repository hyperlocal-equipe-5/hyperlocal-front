import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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
import { type RootState } from '../../store/store';

const ProductPage = () => {
	const { id } = useParams();

	const product = useSelector((state: RootState) =>
		state.product.value.find(item => item.id === id),
	);

	return (
		<Container>
			<Cover src={product?.image} />
			<ContentBox>
				<ProductTitle>{product?.name}</ProductTitle>
				{product?.ingredients.map((ingredient, index) => (
					<CheckBox key={index} id={ingredient.id} name={ingredient.name} />
				))}
			</ContentBox>
			<PriceBox>
				<Price>R$ {product?.price}</Price>
				<CartButton type="button">
					<AiOutlineShoppingCart />
				</CartButton>
			</PriceBox>
		</Container>
	);
};
export default ProductPage;
