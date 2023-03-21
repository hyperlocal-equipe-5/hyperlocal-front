import { HttpRequestAdapter } from '../../../../../helpers/adapters/httpRequest-adapter';
import { RestaurantIdHandler } from '../../../../../helpers/handlers/restaurantId/restaurantIdHandler-helper';
import { TokenHandler } from '../../../../../helpers/handlers/token/tokenHandler-helper';
import { type RoleAdminRouterInterface } from '../../../abstract/routers/role/roleRouterAdmin-interface';
import { ApiConnection } from '../../../connection/apiConnection';
import { RoleAdminRouter } from '../../../routers/role/roleAdmin-router';

export function makeRoleAdminRouterFactory(): RoleAdminRouterInterface {
	const httpRequestAdapter = new HttpRequestAdapter();
	const apiConnection = new ApiConnection();
	const tokenHandler = new TokenHandler();
	const restaurantIdHandler = new RestaurantIdHandler();

	return new RoleAdminRouter(
		httpRequestAdapter,
		apiConnection,
		tokenHandler,
		restaurantIdHandler,
	);
}
