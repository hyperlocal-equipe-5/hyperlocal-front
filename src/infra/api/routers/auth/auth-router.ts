import { type HttpResponse } from '../../../../domain/dto/http/http-response';
import { type LoggedUser } from '../../../../domain/dto/login/loggedUser-dto';
import { type LoginDto } from '../../../../domain/dto/login/login-dto';
import { type HttpRequestAdapterInterface } from '../../../../helpers/abstract/adapters/httpRequest-adapter-interface';
import { type TokenHandlerInterface } from '../../../../helpers/abstract/handlers/tokenHandler-helper-interface';
import { type ApiConnectionInterface } from '../../abstract/connection/apiConnection-abstract';
import { type AuthRouterInterface } from '../../abstract/routers/auth/authRouter-interface';

export class AuthRouter implements AuthRouterInterface {
	private readonly httpRequestAdapter: HttpRequestAdapterInterface;
	private readonly apiConnection: ApiConnectionInterface;
	private readonly tokenHandler: TokenHandlerInterface;

	public constructor(
		httpRequestAdapter: HttpRequestAdapterInterface,
		apiConnection: ApiConnectionInterface,
		tokenHandler: TokenHandlerInterface,
	) {
		this.httpRequestAdapter = httpRequestAdapter;
		this.apiConnection = apiConnection;
		this.tokenHandler = tokenHandler;
	}

	public async login(loginData: LoginDto): Promise<HttpResponse<LoggedUser>> {
		const apiLink = this.apiConnection.getLink();

		const response = await this.httpRequestAdapter
			.post(apiLink + '/login', loginData)
			.then(data => {
				this.tokenHandler.store(data.body.token);
				return data;
			});

		return response;
	}
}
