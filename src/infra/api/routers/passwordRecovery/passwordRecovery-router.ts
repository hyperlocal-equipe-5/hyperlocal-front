import { type ApiConnectionInterface } from '../../abstract/connection/apiConnection-abstract';
import { type HttpRequestAdapterInterface } from '../../../../helpers/abstract/adapters/httpRequest-adapter-interface';
import { type HttpResponse } from '../../../../domain/dto/http/http-response';
import { type RequestPasswordRecoveryDto } from '../../../../domain/dto/passwordRecovery/requestPasswordRecovery-dto';
import { type User } from '../../../../domain/entities/user';
import { type UpdatePasswordDto } from '../../../../domain/dto/passwordRecovery/updatePassword-dto';
import { type PasswordRecoveryRouterInterface } from '../../abstract/routers/passwordRecovery/passwordRecoveryRouter-interface';

export class PasswordRecoveryRouter implements PasswordRecoveryRouterInterface {
	private readonly httpRequestAdapter: HttpRequestAdapterInterface;
	private readonly apiConnection: ApiConnectionInterface;

	public constructor(
		httpRequestAdapter: HttpRequestAdapterInterface,
		apiConnection: ApiConnectionInterface,
	) {
		this.httpRequestAdapter = httpRequestAdapter;
		this.apiConnection = apiConnection;
	}

	public async requestRecovery(
		passwordRecoveryRequestData: RequestPasswordRecoveryDto,
	): Promise<
		HttpResponse<{
			message: string;
		}>
	> {
		const apiLink = this.apiConnection.getLink();

		const response = await this.httpRequestAdapter
			.post(apiLink + '/password-recovery', passwordRecoveryRequestData)
			.catch(error => {
				console.log(error);
			});

		return response;
	}

	public async recoverPassword(
		passwordRecoveryData: UpdatePasswordDto,
	): Promise<HttpResponse<User>> {
		const apiLink = this.apiConnection.getLink();

		const response = await this.httpRequestAdapter
			.patch(apiLink + '/password-recovery', passwordRecoveryData)
			.catch(error => {
				console.log(error);
			});

		return response;
	}
}
