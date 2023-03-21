import { HttpRequestAdapter } from '../../../../../helpers/adapters/httpRequest-adapter';
import { RestaurantIdHandler } from '../../../../../helpers/handlers/restaurantId/restaurantIdHandler-helper';
import { TokenHandler } from '../../../../../helpers/handlers/token/tokenHandler-helper';
import { type IngredientAdminRouterInterface } from '../../../abstract/routers/ingredient/ingredientAdminRouter-interface';
import { ApiConnection } from '../../../connection/apiConnection';
import { IngredientAdminRouter } from '../../../routers/ingredient/ingredientAdmin-router';

export function makeIngredientAdminRouterFactory(): IngredientAdminRouterInterface {
	const httpRequestAdapter = new HttpRequestAdapter();
	const apiConnection = new ApiConnection();
	const tokenHandler = new TokenHandler();
	const restaurantIdHandler = new RestaurantIdHandler();

	return new IngredientAdminRouter(
		httpRequestAdapter,
		apiConnection,
		tokenHandler,
		restaurantIdHandler,
	);
}
