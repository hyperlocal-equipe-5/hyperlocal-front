import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RowBox from '../../components/RowBoxex';
import { makeCategoryRouterFactory } from '../../infra/api/factories/routers/category/categoryRouter-factory';
import { getCategories } from '../../store/slices/category-slice';
import { type RootState } from '../../store/store';
import Container from '../../style/Container';

const Menu = () => {
	const dispatch = useDispatch();
	const categoryStore = useSelector((state: RootState) => state.category.value);
	console.log(categoryStore);

	useEffect(() => {
		makeCategoryRouterFactory()
			.getAllCategories()
			.then(data => {
				dispatch(getCategories(data.body));
			})
			.catch(error => console.log(error));
	}, []);

	return (
		<Container>
			<div className="flex flex-col items-center justify-center py-3 max-w-[1300px] w-auto">
				{categoryStore && categoryStore.length > 0 ? (
					categoryStore.map((category, key) => (
						<RowBox
							key={key}
							idCategory={category.id}
							NameCategory={category.name}
							Product={category.products.map(product => ({
								ProductId: product.id,
								image: product.image,
								NameProduct: product.name,
							}))}
						/>
						// <BoxButton key={key} img={category.} title={category.name} click={() => navigate(`/product/${category.id}`} />
					))
				) : (
					<></>
				)}
			</div>
		</Container>
	);
};

export default Menu;
