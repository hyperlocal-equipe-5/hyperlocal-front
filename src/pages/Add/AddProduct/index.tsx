import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../../../components/Form';
import { type CreateProductDto } from '../../../domain/dto/product/createProduct-dto';
import { type Ingredient } from '../../../domain/entities/ingredient';
import { makeIngredientRouterFactory } from '../../../infra/api/factories/routers/ingredient/ingredientRouter-factory';
import { makeProductAdminRouterFactory } from '../../../infra/api/factories/routers/product/productAdminRouter-factory';
import Button from '../../../style/Button';
import Container from '../../../style/Container';
import FormBox from '../../../style/Form';
import { ButtonType } from '../../../types/ButtonTypes';
import { type InputDto } from '../../../types/Dto/InputDto';
import { InputType } from '../../../types/InputTypes';

const AddProduct = () => {
	const navigate = useNavigate();
	const [ingredient, setIngredient] = useState<Ingredient[]>([
		{
			id: '',
			name: '',
		},
	]);

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

	const Select: InputDto = {
		activeSelection: true,
		Selection: [
			{
				name: 'Categoria',
				selections: {
					names: [],
					addLink: true,
					link: '/add/category',
					nameLink: 'Adicionar novo categoria',
				},
			},
			{
				name: 'Restaurante',
				selections: {
					names: [],
					addLink: true,
					link: '/add/restaurant',
					nameLink: 'Adicionar novo restaurante',
				},
			},
		],
	};

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
		if (field === 'Restaurante') setState({ ...state, name: e.target.value });
		if (field === 'Restaurante')
			setState({ ...state, restaurant: e.target.textContent });
		if (field === 'Destaque')
			setState({ ...state, highlight: e.target.checked });
		if (field === 'Imagem') setState({ ...state, image: e.target.value });
		if (field === 'Preço') setState({ ...state, price: e.target.value });
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		makeProductAdminRouterFactory()
			.createProduct(state)
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
				<Form Function={handleChange} Input={Select} />
				<Button type={ButtonType.submit}>Cadastrar</Button>
			</FormBox>
		</Container>
	);
};
export default AddProduct;
