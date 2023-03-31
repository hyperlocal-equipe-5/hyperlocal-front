import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Form from '../../../components/Form';
import { ImageInput } from '../../../components/ImageInput/ImageInput';
import { type CreateProductDto } from '../../../domain/dto/product/createProduct-dto';
import { type Category } from '../../../domain/entities/category';
import { type Ingredient } from '../../../domain/entities/ingredient';
import { type Restaurant } from '../../../domain/entities/restaurant';
import { makeIngredientRouterFactory } from '../../../infra/api/factories/routers/ingredient/ingredientRouter-factory';
import { makeProductAdminRouterFactory } from '../../../infra/api/factories/routers/product/productAdminRouter-factory';
import { type RootState } from '../../../store/store';
import Button from '../../../style/Button';
import Container from '../../../style/Container';
import FormBox from '../../../style/Form';
import { ButtonType } from '../../../types/ButtonTypes';
import { type InputDto } from '../../../types/Dto/InputDto';
import { InputType } from '../../../types/InputTypes';

const AddProduct = () => {
	const restaurant = useSelector((state: RootState) => state.restaurant.value);
	const category = useSelector((state: RootState) => state.category.value);
	const navigate = useNavigate();
	const [ingredient, setIngredient] = useState<Ingredient[]>([]);

	const Product: InputDto = {
		activeInputText: true,
		Input: [
			{
				name: 'Produto',
				typeInput: InputType.text,
				required: true,
			},
			{
				name: 'Descrição',
				typeInput: InputType.text,
				required: true,
			},
		],
		activeCheckbox: true,
		Checkbox: [
			{
				id: 'highlight',
				name: 'Destaque',
				help: true,
				textHelp:
					'O botão em questão server para destacar o produto dos outros',
			},
		],
	};

	function selectData(
		restaurantArray: Restaurant[],
		categoryArray: Category[],
	): InputDto {
		return {
			activeSelection: true,
			Selection: [
				{
					name: 'Categoria',
					selections: {
						names: categoryArray,
						addLink: true,
						link: '/add/category',
						nameLink: 'Adicionar novo categoria',
					},
				},
				{
					name: 'Restaurante',
					selections: {
						names: restaurantArray,
						addLink: true,
						link: '/add/restaurant',
						nameLink: 'Adicionar novo restaurante',
					},
				},
			],
		};
	}

	const [state, setState] = useState<CreateProductDto>({
		name: '',
		restaurant: '',
		category: '',
		description: '',
		price: +'',
		ingredients: [],
		highlight: false,
		image: '',
	});

	const handleChange = (e: any, field: string) => {
		if (field === 'Produto') setState({ ...state, name: e.target.value });
		if (field === 'Categoria') setState({ ...state, category: e.target.value });
		if (field === 'Restaurante')
			setState({ ...state, restaurant: e.target.value });
		if (field === 'Destaque')
			setState({ ...state, highlight: e.target.checked });
		if (field === 'Descrição')
			setState({ ...state, description: e.target.value });
		if (field === 'Imagem') setState({ ...state, image: e.target.value });
		if (field === 'Preço') setState({ ...state, price: e.target.value });
	};
	const onImageChange = (convertedImage: string) => {
		setState({ ...state, image: convertedImage });
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();

		makeProductAdminRouterFactory()
			.createProduct(state)
			.then(() => navigate('/menu'))
			.catch(error => error);
	};

	useEffect(() => {
		makeIngredientRouterFactory()
			.getAllIngredients()
			.then(data => setIngredient(data.body))
			.catch(error => error);
	}, []);

	return (
		<Container>
			<h1 className="text-textColor">teste</h1>
			<FormBox OnSubmit={handleSubmit}>
				<Form Function={handleChange} Input={Product} />
				<Form
					Function={handleChange}
					Input={selectData(restaurant, category)}
				/>
				<ImageInput onChange={onImageChange} />
				<Button type={ButtonType.submit}>Cadastrar</Button>
			</FormBox>
		</Container>
	);
};
export default AddProduct;
