import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductButton from '../../components/ProductButton';
import { makeCategoryRouterFactory } from '../../infra/api/factories/routers/category/categoryRouter-factory';
import { getCategories } from '../../store/slices/category-slice';
import { type RootState } from '../../store/store';
import Container from '../../style/Container';

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
			<h1 className="text-details text-4xl font-semibold px-4 mobile:w-full border-b-[1px] border-details border-solid">
				{category ? category.name : ''}
			</h1>
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
