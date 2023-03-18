import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeRestaurantRouterFactory } from '../../infra/api/factories/routers/restaurant/restaurantRouter-factory';
import { getRestaurats } from '../../store/slices/restaurant-slice';
import { RootState } from '../../store/store';

export default function DataLoader() {
	const dispatch = useDispatch();

	function loadRestaurants() {
		const restaurantRouter = makeRestaurantRouterFactory();
		restaurantRouter
			.getAllRestaurants()
			.then(restaurants => {
				dispatch(getRestaurats(restaurants.body));
			})
			.catch(error => console.log(error));
	}

	useEffect(() => {
		loadRestaurants();
	}, []);

	return <></>;
}
