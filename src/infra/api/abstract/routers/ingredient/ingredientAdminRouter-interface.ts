import { type HttpResponse } from '../../../../../domain/dto/http/http-response';
import { type CreateIngredientDto } from '../../../../../domain/dto/ingredient/createIngredient-dto';
import { type UpdateIngredientDto } from '../../../../../domain/dto/ingredient/updateIngredient-dto';
import { type Ingredient } from '../../../../../domain/entities/ingredient';

export interface IngredientAdminRouterInterface {
	createIngredient: (
		body: CreateIngredientDto,
	) => Promise<HttpResponse<Ingredient>>;
	deleteIngredient: (ingredientId: string) => Promise<HttpResponse<Ingredient>>;
	updateIngredient: (
		ingredientId: string,
		body: UpdateIngredientDto,
	) => Promise<HttpResponse<Ingredient>>;
}
