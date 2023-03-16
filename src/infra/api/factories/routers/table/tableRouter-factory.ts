import { HttpRequestAdapter } from '../../../../../helpers/adapters/httpRequest-adapter';
import { type TableRouterInterface } from '../../../abstract/routers/table/tableRouter-interface';
import { ApiConnection } from '../../../connection/apiConnection';
import { TableRouter } from '../../../routers/table/table-router';

export function makeTableRouterFactory(): TableRouterInterface {
	const httpRequestAdapter = new HttpRequestAdapter();
	const apiConnection = new ApiConnection();

	return new TableRouter(httpRequestAdapter, apiConnection);
}
