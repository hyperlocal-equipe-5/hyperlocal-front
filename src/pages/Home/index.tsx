import { useSelector, useDispatch } from 'react-redux';
import { type RootState } from '../../store/store';
import { Container } from './styled';
import { useEffect } from 'react';
import { getCategories } from '../../store/slices/category-slice';
import { makeCategoryRouterFactory } from '../../infra/api/factories/routers/category/categoryRouter-factory';
import { useParams } from 'react-router-dom';
import CategoryBox from '../../components/CategoryBox';

const Home = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const categories = useSelector((state: RootState) => state.category.value);

	function setCategories(restaurantId: string) {
		const router = makeCategoryRouterFactory();
		router
			.getAllCategories(restaurantId)
			.then(data => {
				dispatch(getCategories(data.body));
			})
			.catch(error => console.log(error.message));
	}

	useEffect(() => {
		if (id) {
			setCategories(id);
		}
	}, []);

	return (
		<Container>
			{categories.map((category, key) => (
				<CategoryBox
					key={key}
					LinkCategory={category.id}
					NameCategory={category.name}
					Product={category.products.map(product => ({
						LinkProduct: product.id,
						image: product.image,
						NameProduct: product.name,
					}))}
				/>
			))}
		</Container>
	);
};

export default Home;
