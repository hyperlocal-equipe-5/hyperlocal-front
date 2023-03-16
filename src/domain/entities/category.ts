import { type Product } from './product';
import { type Restaurant } from './restaurant';

export interface Category {
	id: string;
	name: string;
	highlight: boolean;
	image: string;
	products: Product[];
	restaurant: Restaurant;
	createdAt: string;
	updatedAt: string;
}
