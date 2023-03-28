import { type Ingredient } from './ingredient';
import { type Product } from './product';
import { type Restaurant } from './restaurant';
import { type Table } from './table';
import { type User } from './user';

export interface Order {
	id: string;
	takeAway: boolean;
	orderNumber?: number;
	customerName?: string;
	finished: boolean;
	products: Array<{
		id: string;
		product: Product;
		ingredientsAdded: Array<{
			id: string;
			ingredient: Ingredient;
			quantity: number;
		}>;
		ingredientsRemoved: Array<{
			id: string;
			ingredient: Ingredient;
			quantity: number;
		}>;
	}>;
	price: number;
	user?: User;
	table?: Table;
	restaurant: Restaurant;
	createdAt: string;
	updatedAt: string;
}
