import { HttpRequestAdapter } from '../../../../../helpers/adapters/httpRequest-adapter';
import { TokenHandler } from '../../../../../helpers/token/tokenHandler-helper';
import { type IngredientAdminRouterInterface } from '../../../abstract/routers/ingredient/ingredientAdminRouter-interface';
import { ApiConnection } from '../../../connection/apiConnection';
import { IngredientAdminRouter } from '../../../routers/ingredient/ingredientAdmin-router';

export function makeIngredientAdminRouterFactory(): IngredientAdminRouterInterface {
	const httpRequestAdapter = new HttpRequestAdapter();
	const apiConnection = new ApiConnection();
	const tokenHandler = new TokenHandler();

	return new IngredientAdminRouter(
		httpRequestAdapter,
		apiConnection,
		tokenHandler,
	);
}
