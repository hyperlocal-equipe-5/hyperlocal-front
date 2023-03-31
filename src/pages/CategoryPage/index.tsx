import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ColumnBox from '../../components/ColumnBox';
import { makeCategoryAdminRouterFactory } from '../../infra/api/factories/routers/category/categoryAdminRouter-factory';
import { makeCategoryRouterFactory } from '../../infra/api/factories/routers/category/categoryRouter-factory';
import { getCategories } from '../../store/slices/category-slice';
import { type RootState } from '../../store/store';
import Button from '../../style/Button';
import Container from '../../style/Container';
import Title from '../../style/Title';
import { ButtonType } from '../../types/ButtonTypes';

const CategoryPage = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const category = useSelector((state: RootState) => state.category.value).find(
		category => category.id === id,
	);
	const navigate = useNavigate();

	const deleteProduct = () => {
		if (id !== undefined) {
			makeCategoryAdminRouterFactory()
				.deleteCategory(id)
				.then(() => navigate('/'))
				.catch(error => error);
		}
	};

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
			<div className="flex flex-col w-full max-w-[1300px]">
				<Title>{category ? category.name : ''}</Title>
				<Button
					styleInline="w-24"
					callbackFunction={() => {
						deleteProduct();
					}}
					type={ButtonType.submit}>
					Apagar
				</Button>
			</div>
			{category ? (
				category.products.map(product => (
					<ColumnBox
						key={product.id}
						title={product.name}
						description={product.description}
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
