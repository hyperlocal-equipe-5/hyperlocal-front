import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductButton from '../../components/ProductButton';
import { makeCategoryRouterFactory } from '../../infra/api/factories/routers/category/categoryRouter-factory';
import { getCategories } from '../../store/slices/category-slice';
import { type RootState } from '../../store/store';
import Container from '../../style/Container';
import { Title } from './styled';

const CategoryPage = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const category = useSelector((state: RootState) => state.category.value).find(
		category => category.id === id,
	);

	useEffect(() => {
		makeCategoryRouterFactory()
			.getAllCategories(id || '')
			.then(data => {
				dispatch(getCategories(data.body));
			})
			.catch(error => {
				console.log(error);
			});
	});

	return (
		<Container>
			<Title>{category ? category.name : ''}</Title>
			{category ? (
				category.products.map(product => (
					<ProductButton
						key={product.id}
						name={product.image}
						img={product.image}
						ProductId={product.id}
						ingredient={product.ingredients.map(ingredient => ingredient.id)}
					/>
				))
			) : (
				<></>
			)}
		</Container>
	);
};

export default CategoryPage;
