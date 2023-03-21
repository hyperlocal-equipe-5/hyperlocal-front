import { HttpRequestAdapter } from '../../../../../helpers/adapters/httpRequest-adapter';
import { type PasswordRecoveryRouterInterface } from '../../../abstract/routers/passwordRecovery/passwordRecoveryRouter-interface';
import { ApiConnection } from '../../../connection/apiConnection';
import { PasswordRecoveryRouter } from '../../../routers/passwordRecovery/passwordRecovery-router';

export function makePasswordRecoveryRouter(): PasswordRecoveryRouterInterface {
	const httpRequestAdapter = new HttpRequestAdapter();
	const apiConnection = new ApiConnection();

	return new PasswordRecoveryRouter(httpRequestAdapter, apiConnection);
}
