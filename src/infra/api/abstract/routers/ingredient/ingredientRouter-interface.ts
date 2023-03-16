import { type HttpResponse } from '../../../../../domain/dto/http/http-response';
import { type Ingredient } from '../../../../../domain/entities/ingredient';

export interface IngredientRouterInterface {
	getOneIngredient: (
		ingredientId: string,
		restaurantId: string,
	) => Promise<HttpResponse<Ingredient>>;
	getAllIngredients: (
		restaurantId: string,
	) => Promise<HttpResponse<Ingredient[]>>;
}
