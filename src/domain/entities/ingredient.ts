import { type Restaurant } from './restaurant';

export interface Ingredient {
	id: string;
	name: string;
	price?: number;
	image?: string;
	quantity?: number;
	restaurant?: Restaurant;
	createdAt?: string;
	updatedAt?: string;
}
