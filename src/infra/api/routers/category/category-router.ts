import { type ApiConnectionInterface } from '../../abstract/connection/apiConnection-abstract';
import { type HttpRequestAdapterInterface } from '../../../../helpers/abstract/adapters/httpRequest-adapter-interface';
import { type HttpResponse } from '../../../../domain/dto/http/http-response';
import { type Category } from '../../../../domain/entities/category';
import { type CategoryRouterInterface } from '../../abstract/routers/category/categoryRouter-interface';
import { type RestaurantIdHandlerInterface } from '../../../../helpers/abstract/handlers/restaurantIdHandler-helper-interface';

export class CategoryRouter implements CategoryRouterInterface {
	private readonly httpRequestAdapter: HttpRequestAdapterInterface;
	private readonly apiConnection: ApiConnectionInterface;
	private readonly restaurantIdHandler: RestaurantIdHandlerInterface;

	public constructor(
		httpRequestAdapter: HttpRequestAdapterInterface,
		apiConnection: ApiConnectionInterface,
		restaurantIdHandler: RestaurantIdHandlerInterface,
	) {
		this.httpRequestAdapter = httpRequestAdapter;
		this.apiConnection = apiConnection;
		this.restaurantIdHandler = restaurantIdHandler;
	}

	public async getOneCategory(
		categoryId: string,
	): Promise<HttpResponse<Category>> {
		const apiLink = this.apiConnection.getLink();
		const restaurantId = this.restaurantIdHandler.get();

		return await this.httpRequestAdapter.get(
			apiLink + `/category/${categoryId}?restaurant=${restaurantId}`,
		);
	}

	public async getAllCategories(): Promise<HttpResponse<Category[]>> {
		const apiLink = this.apiConnection.getLink();
		const restaurantId = this.restaurantIdHandler.get();

		return await this.httpRequestAdapter.get(
			apiLink + `/category?restaurant=${restaurantId}`,
		);
	}
}
