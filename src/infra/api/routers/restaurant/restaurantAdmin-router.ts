import { type HttpResponse } from '../../../../domain/dto/http/http-response';
import { type CreateRestaurantDto } from '../../../../domain/dto/restaurant/createRestaurant-dto';
import { type UpdateRestaurantDto } from '../../../../domain/dto/restaurant/updateRestaurant-dto';
import { type Restaurant } from '../../../../domain/entities/restaurant';
import { type HttpRequestAdapterInterface } from '../../../../helpers/abstract/adapters/httpRequest-adapter-interface';
import { type TokenHandlerInterface } from '../../../../helpers/abstract/token/tokenHandler-helper-interface';
import { type ApiConnectionInterface } from '../../abstract/connection/apiConnection-abstract';
import { type RestaurantRouterAdminInterface } from '../../abstract/routers/restaurant/restaurantRouterAdmin-interface';

export class RestaurantAdminRouter implements RestaurantRouterAdminInterface {
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

	public async createRestaurant(
		body: CreateRestaurantDto,
	): Promise<HttpResponse<Restaurant>> {
		const apiLink = this.apiConnection.getLink();
		const authentication = this.tokenHandler.getAuthorization();

		return await this.httpRequestAdapter.post(
			apiLink + `/admin/restaurant`,
			body,
			authentication,
		);
	}

	public async deleteRestaurant(
		restaurantId: string,
	): Promise<HttpResponse<Restaurant>> {
		const apiLink = this.apiConnection.getLink();
		const authentication = this.tokenHandler.getAuthorization();

		return await this.httpRequestAdapter.delete(
			apiLink + `/admin/restaurant/${restaurantId}`,
			authentication,
		);
	}

	public async updateRestaurant(
		restaurantId: string,
		body: UpdateRestaurantDto,
	): Promise<HttpResponse<Restaurant>> {
		const apiLink = this.apiConnection.getLink();
		const authentication = this.tokenHandler.getAuthorization();

		return await this.httpRequestAdapter.patch(
			apiLink + `/admin/restaurant/${restaurantId}`,
			body,
			authentication,
		);
	}
}
