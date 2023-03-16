import { HttpRequestAdapter } from '../../../../../helpers/adapters/httpRequest-adapter';
import { TokenHandler } from '../../../../../helpers/token/tokenHandler-helper';
import { type UserAdminRouterInterface } from '../../../abstract/routers/user/userRouterAdmin-interface';
import { ApiConnection } from '../../../connection/apiConnection';
import { UserAdminRouter } from '../../../routers/user/userAdmin-router';

export function makeUserAdminRouterFactory(): UserAdminRouterInterface {
	const httpRequestAdapter = new HttpRequestAdapter();
	const apiConnection = new ApiConnection();
	const tokenHandler = new TokenHandler();

	return new UserAdminRouter(httpRequestAdapter, apiConnection, tokenHandler);
}
