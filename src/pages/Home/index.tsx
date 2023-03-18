import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoryBox from '../../components/CategoryBox';
import { makeCategoryRouterFactory } from '../../infra/api/factories/routers/category/categoryRouter-factory';
import { getCategories } from '../../store/slices/category-slice';
import { type RootState } from '../../store/store';
import { Container } from './styled';

const teste2 = ['Funcionários', 'Funcionários', 'Funcionários 3'];

const Home = () => {
	const dispatch = useDispatch();
	const categoryStore = useSelector((state: RootState) => state.category.value);

	useEffect(() => {
		makeCategoryRouterFactory()
			.getAllCategories('16d0d019-4bf4-4782-84aa-5b4fafaa3ab0')
			.then(data => {
				dispatch(getCategories(data.body));
			})
			.catch(error => console.log(error));
	}, []);

	return (
		<Container>
			{categoryStore.map((category, key) => (
				<CategoryBox
					key={key}
					idCategory={category.id}
					NameCategory={category.name}
					Product={category.products.map(product => ({
						ProductId: product.id,
						image: product.image,
						NameProduct: product.name,
					}))}
				/>
			))}
		</Container>
	);
};

export default Home;
