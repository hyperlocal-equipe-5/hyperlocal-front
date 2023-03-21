import { HttpRequestAdapter } from '../../../../../helpers/adapters/httpRequest-adapter';
import { RestaurantIdHandler } from '../../../../../helpers/handlers/restaurantId/restaurantIdHandler-helper';
import { TokenHandler } from '../../../../../helpers/handlers/token/tokenHandler-helper';
import { type TableAdminRouterInterface } from '../../../abstract/routers/table/tableRouterAdmin-interface';
import { ApiConnection } from '../../../connection/apiConnection';
import { TableAdminRouter } from '../../../routers/table/tableAdmin-router';

export function makeTableAdminRouterFactory(): TableAdminRouterInterface {
	const httpRequestAdapter = new HttpRequestAdapter();
	const apiConnection = new ApiConnection();
	const tokenHandler = new TokenHandler();
	const restaurantIdHandler = new RestaurantIdHandler();

	return new TableAdminRouter(
		httpRequestAdapter,
		apiConnection,
		tokenHandler,
		restaurantIdHandler,
	);
}
