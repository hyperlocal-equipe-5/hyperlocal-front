import { HttpRequestAdapter } from '../../../../../helpers/adapters/httpRequest-adapter';
import { RestaurantIdHandler } from '../../../../../helpers/handlers/restaurantId/restaurantIdHandler-helper';
import { type TableRouterInterface } from '../../../abstract/routers/table/tableRouter-interface';
import { ApiConnection } from '../../../connection/apiConnection';
import { TableRouter } from '../../../routers/table/table-router';

export function makeTableRouterFactory(): TableRouterInterface {
	const httpRequestAdapter = new HttpRequestAdapter();
	const apiConnection = new ApiConnection();
	const restaurantIdHandler = new RestaurantIdHandler();

	return new TableRouter(
		httpRequestAdapter,
		apiConnection,
		restaurantIdHandler,
	);
}
