import { type Ingredient } from '../../../domain/entities/ingredient';
import { makeRestaurantStub } from './restaurant-stub';

export function makeIngredienStub(): Ingredient {
	return {
		id: '23nr293r87398',
		name: 'Ingredient',
		price: 123.12,
		image: 'N423r4fre43',
		quantity: 2,
		restaurant: makeRestaurantStub(),
		createdAt: '',
		updatedAt: '',
	};
}
