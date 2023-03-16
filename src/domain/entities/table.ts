import { type Restaurant } from './restaurant';

export interface Table {
	id: string;
	number: number;
	restaurant: Restaurant;
	createdAt: string;
	updatedAt: string;
}
