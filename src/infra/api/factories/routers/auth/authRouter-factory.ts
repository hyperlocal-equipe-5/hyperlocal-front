import { HttpRequestAdapter } from '../../../../../helpers/adapters/httpRequest-adapter';
import { TokenHandler } from '../../../../../helpers/handlers/token/tokenHandler-helper';
import { UserIdHandler } from '../../../../../helpers/handlers/userId/userIHandler-helper';
import { type AuthRouterInterface } from '../../../abstract/routers/auth/authRouter-interface';
import { ApiConnection } from '../../../connection/apiConnection';
import { AuthRouter } from '../../../routers/auth/auth-router';

export function makeAuthRouterFactory(): AuthRouterInterface {
	const httpRequestAdapter = new HttpRequestAdapter();
	const apiConnection = new ApiConnection();
	const tokenHandler = new TokenHandler();
	const userIdHandler = new UserIdHandler();

	return new AuthRouter(
		httpRequestAdapter,
		apiConnection,
		tokenHandler,
		userIdHandler,
	);
}
