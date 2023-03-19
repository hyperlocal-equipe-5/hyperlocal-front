import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CategoryBox from '../../components/CategoryBox';
import { ImageInput } from '../../components/ImageInput/ImageInput';
import { makeCategoryRouterFactory } from '../../infra/api/factories/routers/category/categoryRouter-factory';
import { getCategories } from '../../store/slices/category-slice';
import { type RootState } from '../../store/store';
import Container from '../../style/Container';

const Home = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const categoryStore = useSelector((state: RootState) => state.category.value);
	const [anime, setAnime] = useState(true);

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
