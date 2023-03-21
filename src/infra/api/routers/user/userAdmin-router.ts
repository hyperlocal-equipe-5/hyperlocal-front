import { type ApiConnectionInterface } from '../../abstract/connection/apiConnection-abstract';
import { type HttpRequestAdapterInterface } from '../../../../helpers/abstract/adapters/httpRequest-adapter-interface';
import { type HttpResponse } from '../../../../domain/dto/http/http-response';
import { type CreateUserDto } from '../../../../domain/dto/user/createUser-dto';
import { type User } from '../../../../domain/entities/user';
import { type UpdateUserDto } from '../../../../domain/dto/user/updateUser-dto';
import { type TokenHandler } from '../../../../helpers/handlers/token/tokenHandler-helper';
import { type UserAdminRouterInterface } from '../../abstract/routers/user/userRouterAdmin-interface';
import { type RestaurantIdHandlerInterface } from '../../../../helpers/abstract/handlers/restaurantIdHandler-helper-interface';

export class UserAdminRouter implements UserAdminRouterInterface {
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
		const authorization = this.tokenHandler.getAuthorization();

		return await this.httpRequestAdapter.post(
			apiLink + '/admin/user',
			body,
			authorization,
		);
	}

	public async deleteUser(userId: string): Promise<HttpResponse<User>> {
		const apiLink = this.apiConnection.getLink();
		const authorization = this.tokenHandler.getAuthorization();
		const restaurantId = this.restaurantIdHandler.get();

		return await this.httpRequestAdapter.delete(
			apiLink + `/admin/user/${userId}?restaurant=${restaurantId}`,
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
			apiLink + `/admin/user/${userId}`,
			body,
			authorization,
		);
	}

	public async getOneUser(userId: string): Promise<HttpResponse<User>> {
		const apiLink = this.apiConnection.getLink();
		const authorization = this.tokenHandler.getAuthorization();
		const restaurantId = this.restaurantIdHandler.get();

		return await this.httpRequestAdapter.get(
			apiLink + `/admin/user/${userId}?restaurant=${restaurantId}`,
			authorization,
		);
	}

	public async getAllUsers(): Promise<HttpResponse<User[]>> {
		const apiLink = this.apiConnection.getLink();
		const authorization = this.tokenHandler.getAuthorization();
		const restaurantId = this.restaurantIdHandler.get();

		return await this.httpRequestAdapter.get(
			apiLink + `/admin/user?restaurant=${restaurantId}`,
			authorization,
		);
	}
}
