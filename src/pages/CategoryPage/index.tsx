import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ColumnBox from '../../components/ColumnBox';
import { makeCategoryRouterFactory } from '../../infra/api/factories/routers/category/categoryRouter-factory';
import { getCategories } from '../../store/slices/category-slice';
import { type RootState } from '../../store/store';
import Container from '../../style/Container';
import Title from '../../style/Title';

const CategoryPage = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const category = useSelector((state: RootState) => state.category.value).find(
		category => category.id === id,
	);
	const navigate = useNavigate();

	useEffect(() => {
		makeCategoryRouterFactory()
			.getAllCategories()
			.then(data => {
				dispatch(getCategories(data.body));
			})
			.catch(error => error);
	}, []);

	return (
		<Container>
			<Title>{category ? category.name : ''}</Title>
			{category ? (
				category.products.map(product => (
					<ColumnBox
						key={product.id}
						title={product.name}
						ingredient={product.ingredients.map(el => el.name)}
						price={product.price}
						img={product.image}
						click={() => navigate(`/product/${product.id}`)}
					/>
				))
			) : (
				<></>
			)}
		</Container>
	);
};

export default CategoryPage;
