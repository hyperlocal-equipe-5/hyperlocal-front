import { type Restaurant } from './restaurant';
import { type ReviewQuestion } from './reviewQuestion';
import { type User } from './user';

export interface Review {
	id: string;
	responses: Array<{
		id: string;
		question: ReviewQuestion;
		answer: string;
		stars: number;
	}>;
	user?: User;
	restaurant: Restaurant;
	createdAt: string;
	updatedAt: string;
}
