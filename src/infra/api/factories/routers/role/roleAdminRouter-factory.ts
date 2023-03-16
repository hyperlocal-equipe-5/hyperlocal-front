import { HttpRequestAdapter } from '../../../../../helpers/adapters/httpRequest-adapter';
import { TokenHandler } from '../../../../../helpers/token/tokenHandler-helper';
import { type RoleAdminRouterInterface } from '../../../abstract/routers/role/roleRouterAdmin-interface';
import { ApiConnection } from '../../../connection/apiConnection';
import { RoleAdminRouter } from '../../../routers/role/roleAdmin-router';

export function makeRoleAdminRouterFactory(): RoleAdminRouterInterface {
	const httpRequestAdapter = new HttpRequestAdapter();
	const apiConnection = new ApiConnection();
	const tokenHandler = new TokenHandler();

	return new RoleAdminRouter(httpRequestAdapter, apiConnection, tokenHandler);
}
