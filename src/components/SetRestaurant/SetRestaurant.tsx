import { useSelector } from 'react-redux';
import { RestaurantIdHandler } from '../../helpers/handlers/restaurantId/restaurantIdHandler-helper';
import { type RootState } from '../../store/store';

export function SetRestaurant() {
	const restaurants = useSelector((state: RootState) => state.restaurant.value);

	function handleChange(restaurantId: string) {
		new RestaurantIdHandler().store(restaurantId);
	}

	return (
		<div>
			<select
				style={{ color: 'black' }}
				onChange={event => handleChange(event.target.value)}>
				<option value="">Selecione</option>
				{restaurants.map((restaurant, index) => (
					<option key={index} value={restaurant.id}>
						{restaurant.name}
					</option>
				))}
			</select>
		</div>
	);
}
