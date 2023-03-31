import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { type RootState } from '../../store/store';
import Button from '../../style/Button';
import Container from '../../style/Container';
import { ButtonType } from '../../types/ButtonTypes';
import { Cover, PriceBox } from './styled';
import { addProduct } from '../../store/slices/customerOrderSlice';

const ProductPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const product = useSelector((state: RootState) =>
		state.product.value.find(item => item.id === id),
	);

	const handleClick = () => {
		navigate('/add/order');
		dispatch(
			addProduct({
				product: product?.id ?? '',
				ingredientsAdded: [],
				ingredientsRemoved: [],
			}),
		);
		alert('Produto adicionado ao carrinho.');
	};

	return (
		<Container>
			<Cover src={product?.image} />
			<div className="flex flex-col justify-start items-start  mobile:min-h-[15rem] mobile:max-h-full mobile:w-full mobile:p-4">
				<h1 className="text-3xl text-details capitalize  mobile:pb-4">
					{product?.name}
				</h1>
			</div>
			<PriceBox>
				<p className="text-[#fefbff] text-2xl font-black">
					R$ {product?.price}
				</p>
			</PriceBox>
			<Button callbackFunction={handleClick} type={ButtonType.button}>
				<AiOutlineShoppingCart /> Adicionar
			</Button>
		</Container>
	);
};

export default ProductPage;
