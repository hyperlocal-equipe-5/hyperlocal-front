import { type Category } from './category';
import { type Ingredient } from './ingredient';
import { type Restaurant } from './restaurant';

export interface Product {
	id: string;
	name: string;
	price: number;
	description: string;
	highlight: boolean;
	image: string;
	ingredients: Ingredient[];
	category: Category;
	restaurant: Restaurant;
	createdAt: string;
	updatedAt: string;
}
