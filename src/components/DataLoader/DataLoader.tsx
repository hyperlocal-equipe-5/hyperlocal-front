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
import { TableIdHandler } from '../../helpers/handlers/tableId/tableIdHandler-helper';
import { makeIngredientRouterFactory } from '../../infra/api/factories/routers/ingredient/ingredientRouter-factory';
import { getIngredients } from '../../store/slices/ingredient-slice';

export default function DataLoader() {
	const dispatch = useDispatch();
	const urlParams = location.pathname.split('/');
	const urlRestaurantId = urlParams.length >= 2 ? urlParams[1] : '';
	const urlTableId = urlParams.length >= 3 ? urlParams[2] : '';

	function loadRestaurants() {
		const restaurantRouter = makeRestaurantRouterFactory();
		restaurantRouter
			.getAllRestaurants()
			.then(restaurants => {
				dispatch(getRestaurats(restaurants.body));

				const selectedRestaurant = restaurants.body.find(item =>
					item.id.includes(urlRestaurantId),
				);

				new RestaurantIdHandler().store(
					selectedRestaurant?.id || new RestaurantIdHandler().get(),
				);

				makeTableRouterFactory()
					.getAllTables()
					.then(tables => {
						dispatch(getTables(tables.body));

						const selectedTable = tables.body.find(table =>
							table.id.includes(urlTableId),
						);

						new TableIdHandler().store(
							selectedTable?.id || new TableIdHandler().get(),
						);
					})
					.catch(error => error);

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

						makeIngredientRouterFactory()
							.getAllIngredients()
							.then(ingredients => {
								dispatch(getIngredients(ingredients.body));
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
