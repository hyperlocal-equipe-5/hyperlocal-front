import { type ApiConnectionInterface } from '../../abstract/connection/apiConnection-abstract';
import { type HttpRequestAdapterInterface } from '../../../../helpers/abstract/adapters/httpRequest-adapter-interface';
import { type LoginDto } from '../../../../domain/dto/login/login-dto';
import { type HttpResponse } from '../../../../domain/dto/http/http-response';
import { type LoggedUser } from '../../../../domain/dto/login/loggedUser-dto';
import { type AuthRouterInterface } from '../../abstract/routers/auth/authRouter-interface';
import { type TokenHandlerInterface } from '../../../../helpers/abstract/handlers/tokenHandler-helper-interface';
import { type UserIdHandlerInterface } from '../../../../helpers/abstract/handlers/userIdHandler-helper-interface';

export class AuthRouter implements AuthRouterInterface {
	private readonly httpRequestAdapter: HttpRequestAdapterInterface;
	private readonly apiConnection: ApiConnectionInterface;
	private readonly tokenHandler: TokenHandlerInterface;
	private readonly userIdHandler: UserIdHandlerInterface;

	public constructor(
		httpRequestAdapter: HttpRequestAdapterInterface,
		apiConnection: ApiConnectionInterface,
		tokenHandler: TokenHandlerInterface,
		userIdHandler: UserIdHandlerInterface,
	) {
		this.httpRequestAdapter = httpRequestAdapter;
		this.apiConnection = apiConnection;
		this.tokenHandler = tokenHandler;
		this.userIdHandler = userIdHandler;
	}

	public async login(loginData: LoginDto): Promise<HttpResponse<LoggedUser>> {
		const apiLink = this.apiConnection.getLink();

		const response = await this.httpRequestAdapter
			.post(apiLink + '/login', loginData)
			.then(data => {
				this.tokenHandler.store(data.body.token);
				this.userIdHandler.store(data.body.user.id);

				return data;
			});

		return response;
	}
}
