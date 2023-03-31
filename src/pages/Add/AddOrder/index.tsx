import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ColumnBox from '../../../components/ColumnBox';
import Form from '../../../components/Form';
import { type CreateOrderDto } from '../../../domain/dto/order/createOrder-dto';
import { OrderProductsHandler } from '../../../helpers/handlers/orderProductIds/orderProductsHandler-helper';
import { RestaurantIdHandler } from '../../../helpers/handlers/restaurantId/restaurantIdHandler-helper';
import { TableIdHandler } from '../../../helpers/handlers/tableId/tableIdHandler-helper';
import { makeOrderRouterFactory } from '../../../infra/api/factories/routers/order/orderRouter-factory';
import { type RootState } from '../../../store/store';
import Button from '../../../style/Button';
import Container from '../../../style/Container';
import FormBox from '../../../style/Form';
import Title from '../../../style/Title';
import { ButtonType } from '../../../types/ButtonTypes';
import { type InputDto } from '../../../types/Dto/InputDto';
import { InputType } from '../../../types/InputTypes';

const AddOrder = () => {
	const customerOrder = new OrderProductsHandler().getProducts().map(item => ({
		product: item,
		ingredientsAdded: [],
		ingredientsRemoved: [],
	}));
	const products = useSelector((state: RootState) => state.product.value);
	const customerOrderProducts = customerOrder.map(product => {
		const foundProduct = products.find(item => item.id === product.product);
		return {
			img: foundProduct?.image ?? '',
			title: foundProduct?.name ?? '',
			ingredient: foundProduct?.ingredients.map(ingredient => ingredient.name),
			price: foundProduct?.price ?? 0,
		};
	});

	const OrderInto: InputDto = {
		activeInputText: true,
		Input: [
			{
				name: 'Seu nome',
				typeInput: InputType.text,
				required: true,
			},
		],
		activeCheckbox: true,
		Checkbox: [
			{
				id: 'takeaway',
				name: 'Para levar',
				help: true,
				textHelp: 'Levar o pedido para casa',
			},
		],
	};
	const navigate = useNavigate();
	const [restaurant, setRestaurant] = useState('');
	const [state, setState] = useState<CreateOrderDto>({
		finished: false,
		products: [],
		takeAway: false,
		customerName: '',
		restaurant: new RestaurantIdHandler().get(),
	});

	const handleChange = (e: any, field: string) => {
		if (field === 'Seu nome')
			setState({ ...state, customerName: e.target.value });
		if (field === 'Para levar')
			setState({ ...state, takeAway: e.target.checked });
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();

		const orderBody: CreateOrderDto = {
			restaurant: new RestaurantIdHandler().get(),
			customerName: state.customerName,
			takeAway: state.takeAway,
			finished: state.finished,
			products: customerOrder,
		};

		if (
			new TableIdHandler().get() &&
			new TableIdHandler().get().trim() !== ''
		) {
			orderBody.table = new TableIdHandler().get();
		}

		makeOrderRouterFactory()
			.createOrder(orderBody)
			.catch(error => error);
	};

	const getTotalPrice = (): number => {
		return customerOrderProducts
			.map(item => item.price)
			.reduce((price1, price2) => price1 + price2);
	};

	const deleteProduct = (index: number) => {
		const productIds = new OrderProductsHandler().getProducts();
		productIds.splice(index, 1);
		const newProductIds = productIds;
		new OrderProductsHandler().store(',' + newProductIds.join(','));

		window.location.reload();
	};

	useEffect(() => {
		const restaurante = new RestaurantIdHandler().get();
		setRestaurant(restaurante);
	}, [restaurant]);

	return (
		<Container>
			<Title>Cadastrar</Title>
			<FormBox OnSubmit={handleSubmit}>
				<Form Input={OrderInto} Function={handleChange} />
				{customerOrderProducts.map((item, index) =>
					item.title !== '' ? (
						<div key={index}>
							<ColumnBox
								img={item.img}
								title={item.title}
								ingredient={item.ingredient}
								price={item.price}
								click={() => {}}
								description={''}
							/>
							<Button
								callbackFunction={() => {
									deleteProduct(index);
								}}
								type={ButtonType.button}>
								Apagar
							</Button>
						</div>
					) : (
						<div key={index}></div>
					),
				)}
				<h1 className="text-details py-3 text-2xl font-semibold">
					Total: R$ {getTotalPrice()},00
				</h1>
				<Button type={ButtonType.submit}>Enviar</Button>
			</FormBox>
		</Container>
	);
};
export default AddOrder;
