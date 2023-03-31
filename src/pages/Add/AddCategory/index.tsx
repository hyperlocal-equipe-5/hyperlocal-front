import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Form from '../../../components/Form';
import { type CreateCategoryDto } from '../../../domain/dto/category/createCategory-dto';
import { type Restaurant } from '../../../domain/entities/restaurant';
import { makeCategoryAdminRouterFactory } from '../../../infra/api/factories/routers/category/categoryAdminRouter-factory';
import { type RootState } from '../../../store/store';
import Button from '../../../style/Button';
import Container from '../../../style/Container';
import FormBox from '../../../style/Form';
import Title from '../../../style/Title';
import { ButtonType } from '../../../types/ButtonTypes';
import { type InputDto } from '../../../types/Dto/InputDto';
import { InputType } from '../../../types/InputTypes';

const AddCategory = () => {
	const restaurant = useSelector((state: RootState) => state.restaurant.value);
	const navigate = useNavigate();
	const [state, setState] = useState<CreateCategoryDto>({
		name: '',
		restaurant: '',
		highlight: false,
		image: '',
	});

	function categoryData(restaurantArray: Restaurant[]): InputDto {
		return {
			activeInputText: true,
			Input: [
				{
					name: 'Categoria',
					typeInput: InputType.text,
					required: true,
				},
			],
			activeSelection: true,
			Selection: [
				{
					name: 'Restaurante',
					selections: {
						names: restaurantArray.map(item => ({
							name: item.name,
							id: item.id,
						})),
						addLink: true,
						link: '/add/restaurant',
						nameLink: 'Adicionar novo restaurante',
					},
				},
			],
			activeCheckbox: true,
			Checkbox: [
				{
					id: 'highlight',
					name: 'Destaque',
				},
			],
		};
	}

	const handleChange = (e: any, field: string) => {
		if (field === 'Categoria') setState({ ...state, name: e.target.value });
		if (field === 'Restaurante')
			setState({ ...state, restaurant: e.target.value });
		if (field === 'Destaque')
			setState({ ...state, highlight: e.target.checked });
		if (field === 'Imagem') setState({ ...state, image: e.target.value });
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();

		makeCategoryAdminRouterFactory()
			.createCategory(state)
			.then(data => {
				console.log(data);
				navigate('/menu');
			})
			.catch(error => console.log(error));
	};

	return (
		<Container>
			<Title>Cadastrar</Title>
			<FormBox OnSubmit={handleSubmit}>
				{restaurant.length > 0 ? (
					<Form Function={handleChange} Input={categoryData(restaurant)} />
				) : (
					<></>
				)}
				<Button type={ButtonType.submit}>Cadastrar</Button>
			</FormBox>
		</Container>
	);
};
export default AddCategory;
