import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RestaurantIdHandler } from '../../helpers/handlers/restaurantId/restaurantIdHandler-helper';
import { makeCategoryRouterFactory } from '../../infra/api/factories/routers/category/categoryRouter-factory';
import { makeRestaurantRouterFactory } from '../../infra/api/factories/routers/restaurant/restaurantRouter-factory';
import { getCategories } from '../../store/slices/category-slice';
import { getRestaurats } from '../../store/slices/restaurant-slice';
import { makeProductRouterFactory } from '../../infra/api/factories/routers/product/productRouter-factory';
import { getProducts } from '../../store/slices/product-slice';
import { makeTableRouterFactory } from '../../infra/api/factories/routers/table/tableRouter-factory';
import { getTables } from '../../store/slices/table-slice';

export default function DataLoader() {
	const dispatch = useDispatch();

	function loadRestaurants() {
		const restaurantRouter = makeRestaurantRouterFactory();
		restaurantRouter
			.getAllRestaurants()
			.then(restaurants => {
				dispatch(getRestaurats(restaurants.body));

				const restaurantIdParameter = location.pathname
					.replace('/', '')
					.replace('/', '');
				const selectedRestaurant = restaurants.body.find(item =>
					item.id.includes(restaurantIdParameter),
				);

				console.log(selectedRestaurant);

				new RestaurantIdHandler().store(
					selectedRestaurant?.id || new RestaurantIdHandler().get(),
				);

				makeCategoryRouterFactory()
					.getAllCategories()
					.then(data => {
						dispatch(getCategories(data.body));

						makeProductRouterFactory()
							.getAllProducts()
							.then(products => {
								dispatch(getProducts(products.body));
							})
							.catch(error => error);
					})
					.catch(error => console.log(error));
			})
			.catch(error => console.log(error));
	}

	useEffect(() => {
		loadRestaurants();
	}, []);

	return <></>;
}
