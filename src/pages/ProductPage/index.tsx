import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CheckBox from '../../components/CheckBox';
import { type RootState } from '../../store/store';

import Button from '../../style/Button';
import Container from '../../style/Container';
import { Cover, PriceBox } from './styled';

enum ButtonType {
	submit = 'submit',
	reset = 'reset',
	button = 'button',
}

const ProductPage = () => {
	const { id } = useParams();

	const product = useSelector((state: RootState) =>
		state.product.value.find(item => item.id === id),
	);

	const HandleChange = (e: any) => {
		console.log(e.target.value, e.target.checked);
	};

	return (
		<Container>
			<Cover src={product?.image} />
			<div className="flex flex-col justify-start items-start  mobile:min-h-[15rem] mobile:max-h-full mobile:w-full mobile:p-4">
				<h1 className="text-3xl text-[#75ba12] capitalize  mobile:pb-4">
					{product?.name}
				</h1>
				{product?.ingredients.map((el, i) => (
					<CheckBox key={i} id={el.id} name={el.name} OnChange={HandleChange} />
				))}
			</div>
			<PriceBox>
				<p className="text-[#fefbff] text-2xl font-black">
					R$ {product?.price}
				</p>
			</PriceBox>
			<Button type={ButtonType.button}>
				<AiOutlineShoppingCart /> Carrinho
			</Button>
		</Container>
	);
};

export default ProductPage;
