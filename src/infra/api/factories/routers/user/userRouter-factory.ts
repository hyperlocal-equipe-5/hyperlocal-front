import { HttpRequestAdapter } from '../../../../../helpers/adapters/httpRequest-adapter';
import { TokenHandler } from '../../../../../helpers/token/tokenHandler-helper';
import { type UserRouterInterface } from '../../../abstract/routers/user/userRouter-interface';
import { ApiConnection } from '../../../connection/apiConnection';
import { UserRouter } from '../../../routers/user/user-router';

export function makeUserRouterFactory(): UserRouterInterface {
	const httpRequestAdapter = new HttpRequestAdapter();
	const apiConnection = new ApiConnection();
	const tokenHandler = new TokenHandler();

	return new UserRouter(httpRequestAdapter, apiConnection, tokenHandler);
}
