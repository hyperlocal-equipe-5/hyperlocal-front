import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../../../components/Form';
import { type CreateCategoryDto } from '../../../domain/dto/category/createCategory-dto';
import Button from '../../../style/Button';
import Container from '../../../style/Container';
import FormBox from '../../../style/Form';
import { ButtonType } from '../../../types/ButtonTypes';
import { type InputDto } from '../../../types/Dto/InputDto';
import { InputType } from '../../../types/InputTypes';

const Category: InputDto = {
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
				names: [],
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

const AddCategory = () => {
	const navigate = useNavigate();
	const [state, setState] = useState<CreateCategoryDto>({
		name: '',
		restaurant: '',
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
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
	};

	return (
		<Container>
			<h1 className="text-textColor">teste</h1>
			<FormBox OnSubmit={handleSubmit}>
				<Form Function={handleChange} Input={Category} />
				<Button type={ButtonType.submit}>Cadastrar</Button>
			</FormBox>
		</Container>
	);
};
export default AddCategory;
