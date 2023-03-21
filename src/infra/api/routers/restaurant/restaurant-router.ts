import { type ApiConnectionInterface } from '../../abstract/connection/apiConnection-abstract';
import { type HttpRequestAdapterInterface } from '../../../../helpers/abstract/adapters/httpRequest-adapter-interface';
import { type HttpResponse } from '../../../../domain/dto/http/http-response';
import { type Restaurant } from '../../../../domain/entities/restaurant';
import { type RestaurantRouterInterface } from '../../abstract/routers/restaurant/restaurantRouter-interface';

export class RestaurantRouter implements RestaurantRouterInterface {
	private readonly httpRequestAdapter: HttpRequestAdapterInterface;
	private readonly apiConnection: ApiConnectionInterface;

	public constructor(
		httpRequestAdapter: HttpRequestAdapterInterface,
		apiConnection: ApiConnectionInterface,
	) {
		this.httpRequestAdapter = httpRequestAdapter;
		this.apiConnection = apiConnection;
	}

	public async getOneRestaurant(id: string): Promise<HttpResponse<Restaurant>> {
		const apiLink = this.apiConnection.getLink();

		return await this.httpRequestAdapter.get(apiLink + `/restaurant/${id}`);
	}

	public async getAllRestaurants(): Promise<HttpResponse<Restaurant[]>> {
		const apiLink = this.apiConnection.getLink();

		return await this.httpRequestAdapter.get(apiLink + `/restaurant`);
	}
}
