import { type Product } from '../../../domain/entities/product';
import { makeCategoryStub } from './category-stub';
import { makeIngredienStub } from './ingredient-stub';
import { makeRestaurantStub } from './restaurant-stub';

export function makeProductStub(): Product {
	return {
		id: '832ye89ne98em',
		name: 'Product',
		price: 3459,
		description: 'Description',
		highlight: false,
		image: '293r8x9238ru923m',
		ingredients: [makeIngredienStub()],
		category: makeCategoryStub(),
		restaurant: makeRestaurantStub(),
		createdAt: '',
		updatedAt: '',
	};
}
