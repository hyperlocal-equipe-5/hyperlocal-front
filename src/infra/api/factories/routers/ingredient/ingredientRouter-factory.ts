import { HttpRequestAdapter } from '../../../../../helpers/adapters/httpRequest-adapter';
import { type IngredientRouterInterface } from '../../../abstract/routers/ingredient/ingredientRouter-interface';
import { ApiConnection } from '../../../connection/apiConnection';
import { IngredientRouter } from '../../../routers/ingredient/ingredient-router';

export function makeIngredientRouterFactory(): IngredientRouterInterface {
	const httpRequestAdapter = new HttpRequestAdapter();
	const apiConnection = new ApiConnection();

	return new IngredientRouter(httpRequestAdapter, apiConnection);
}
