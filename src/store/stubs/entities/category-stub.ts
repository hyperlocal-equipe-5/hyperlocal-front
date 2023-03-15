import { type Category } from '../../../domain/entities/category';
import { makeRestaurantStub } from './restaurant-stub';

export function makeCategoryStub(): Category {
	return {
		id: '23423x4n29n3878nr9',
		name: 'Category',
		highlight: false,
		image: 'n93n8r9mz34rx344e',
		products: [],
		restaurant: makeRestaurantStub(),
		createdAt: '',
		updatedAt: '',
	};
}
