import { type Restaurant } from './restaurant';
import { type User } from './user';

export interface Review {
	id: string;
	stars: number;
	comment: string;
	user?: User;
	restaurant: Restaurant;
	createdAt: string;
	updatedAt: string;
}
