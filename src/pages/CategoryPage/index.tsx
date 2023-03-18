import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductButton from '../../components/ProductButton';
import { makeCategoryRouterFactory } from '../../infra/api/factories/routers/category/categoryRouter-factory';
import { getCategories } from '../../store/slices/category-slice';
import { type RootState } from '../../store/store';
import { Container, Title } from './styled';

const CategoryPage = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const category = useSelector((state: RootState) => state.category.value).find(
		category => category.id === id,
	);

	useEffect(() => {
		makeCategoryRouterFactory()
			.getAllCategories('16d0d019-4bf4-4782-84aa-5b4fafaa3ab0')
			.then(data => {
				dispatch(getCategories(data.body));
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	return (
		<Container>
			<Title>{category ? category.name : ''}</Title>
			{category ? (
				category.products.map((product, key) => (
					<>
						<ProductButton
							key={key}
							name={product.image}
							img={product.image}
							ProductId={product.id}
							ingredient={product.ingredients.map(ingredient => ingredient.id)}
						/>
					</>
				))
			) : (
				<></>
			)}
		</Container>
	);
};

export default CategoryPage;
