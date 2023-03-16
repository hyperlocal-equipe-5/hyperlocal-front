import { HttpRequestAdapter } from '../../../../../helpers/adapters/httpRequest-adapter';
import { TokenHandler } from '../../../../../helpers/token/tokenHandler-helper';
import { type AuthRouterInterface } from '../../../abstract/routers/auth/authRouter-interface';
import { ApiConnection } from '../../../connection/apiConnection';
import { AuthRouter } from '../../../routers/auth/auth-router';

export function makeAuthRouterFactory(): AuthRouterInterface {
	const httpRequestAdapter = new HttpRequestAdapter();
	const apiConnection = new ApiConnection();
	const tokenHandler = new TokenHandler();

	return new AuthRouter(httpRequestAdapter, apiConnection, tokenHandler);
}
