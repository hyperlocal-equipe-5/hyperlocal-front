import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CategoryBox from '../../components/CategoryBox';
import { makeCategoryRouterFactory } from '../../infra/api/factories/routers/category/categoryRouter-factory';
import { getCategories } from '../../store/slices/category-slice';
import { type RootState } from '../../store/store';
import Container from '../../style/Container';

const Home = () => {
	const categoryStore = useSelector((state: RootState) => state.category.value);

	useEffect(() => {
		makeCategoryRouterFactory()
			.getAllCategories(id || '')
			.then(data => {
				dispatch(getCategories(data.body));
			})
			.catch(error => console.log(error));
	}, []);
	return (
		<Container>
			{categoryStore && categoryStore.length > 0 ? (
				categoryStore.map((category, key) => (
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
				))
			) : (
				<></>
			)}
		</Container>
	);
};

export default Home;
