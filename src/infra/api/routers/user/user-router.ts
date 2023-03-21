import { type ApiConnectionInterface } from '../../abstract/connection/apiConnection-abstract';
import { type HttpRequestAdapterInterface } from '../../../../helpers/abstract/adapters/httpRequest-adapter-interface';
import { type HttpResponse } from '../../../../domain/dto/http/http-response';
import { type CreateUserDto } from '../../../../domain/dto/user/createUser-dto';
import { type User } from '../../../../domain/entities/user';
import { type UpdateUserDto } from '../../../../domain/dto/user/updateUser-dto';
import { type TokenHandler } from '../../../../helpers/handlers/token/tokenHandler-helper';
import { type UserRouterInterface } from '../../abstract/routers/user/userRouter-interface';
import { type RestaurantIdHandlerInterface } from '../../../../helpers/abstract/handlers/restaurantIdHandler-helper-interface';

export class UserRouter implements UserRouterInterface {
	private readonly httpRequestAdapter: HttpRequestAdapterInterface;
	private readonly apiConnection: ApiConnectionInterface;
	private readonly tokenHandler: TokenHandler;
	private readonly restaurantIdHandler: RestaurantIdHandlerInterface;

	public constructor(
		httpRequestAdapter: HttpRequestAdapterInterface,
		apiConnection: ApiConnectionInterface,
		tokenHandler: TokenHandler,
		restaurantIdHandler: RestaurantIdHandlerInterface,
	) {
		this.httpRequestAdapter = httpRequestAdapter;
		this.apiConnection = apiConnection;
		this.tokenHandler = tokenHandler;
		this.restaurantIdHandler = restaurantIdHandler;
	}

	public async createUser(body: CreateUserDto): Promise<HttpResponse<User>> {
		const apiLink = this.apiConnection.getLink();

		return await this.httpRequestAdapter.post(apiLink + '/user', body);
	}

	public async deleteUser(userId: string): Promise<HttpResponse<User>> {
		const apiLink = this.apiConnection.getLink();
		const authorization = this.tokenHandler.getAuthorization();
		const restaurantId = this.restaurantIdHandler.get();

		return await this.httpRequestAdapter.delete(
			apiLink + `/user/${userId}?restaurant=${restaurantId}`,
			authorization,
		);
	}

	public async updateUser(
		userId: string,
		body: UpdateUserDto,
	): Promise<HttpResponse<User>> {
		const apiLink = this.apiConnection.getLink();
		const authorization = this.tokenHandler.getAuthorization();

		return await this.httpRequestAdapter.patch(
			apiLink + `/user/${userId}`,
			body,
			authorization,
		);
	}

	public async getOneUser(userId: string): Promise<HttpResponse<User>> {
		const apiLink = this.apiConnection.getLink();
		const authorization = this.tokenHandler.getAuthorization();
		const restaurantId = this.restaurantIdHandler.get();

		return await this.httpRequestAdapter.get(
			apiLink + `/user/${userId}?restaurant=${restaurantId}`,
			authorization,
		);
	}
}
