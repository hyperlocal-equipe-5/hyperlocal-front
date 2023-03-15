import { type Product } from './product';
import { type Restaurant } from './restaurant';
import { type Table } from './table';
import { type User } from './user';

export interface Order {
	id: string;
	takeAway: boolean;
	orderNumber?: number;
	customerName?: string;
	products: Product[];
	quantities: number[];
	user?: User;
	table?: Table;
	restaurant: Restaurant;
	createdAt: string;
	updatedAt: string;
}
