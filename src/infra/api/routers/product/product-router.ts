import { type ApiConnectionInterface } from '../../abstract/connection/apiConnection-abstract';
import { type HttpRequestAdapterInterface } from '../../../../helpers/abstract/adapters/httpRequest-adapter-interface';
import { type HttpResponse } from '../../../../domain/dto/http/http-response';
import { type Product } from '../../../../domain/entities/product';
import { type ProductRouterInterface } from '../../abstract/routers/product/productRouter-interface';
import { type RestaurantIdHandlerInterface } from '../../../../helpers/abstract/handlers/restaurantIdHandler-helper-interface';

export class ProductRouter implements ProductRouterInterface {
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

	public async getOneProduct(
		productId: string,
	): Promise<HttpResponse<Product>> {
		const apiLink = this.apiConnection.getLink();
		const restaurantId = this.restaurantIdHandler.get();

		return await this.httpRequestAdapter.get(
			apiLink + `/product/${productId}?restaurant=${restaurantId}`,
		);
	}

	public async getAllProducts(): Promise<HttpResponse<Product[]>> {
		const apiLink = this.apiConnection.getLink();
		const restaurantId = this.restaurantIdHandler.get();

		return await this.httpRequestAdapter.get(
			apiLink + `/product?restaurant=${restaurantId}`,
		);
	}
}
