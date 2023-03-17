import { type ApiConnectionInterface } from '../../abstract/connection/apiConnection-abstract';
import { type HttpRequestAdapterInterface } from '../../../../helpers/abstract/adapters/httpRequest-adapter-interface';
import { type HttpResponse } from '../../../../domain/dto/http/http-response';
import { type Product } from '../../../../domain/entities/product';
import { type ProductRouterInterface } from '../../abstract/routers/product/productRouter-interface';

export class ProductRouter implements ProductRouterInterface {
	private readonly httpRequestAdapter: HttpRequestAdapterInterface;
	private readonly apiConnection: ApiConnectionInterface;

	public constructor(
		httpRequestAdapter: HttpRequestAdapterInterface,
		apiConnection: ApiConnectionInterface,
	) {
		this.httpRequestAdapter = httpRequestAdapter;
		this.apiConnection = apiConnection;
	}

	public async getOneProduct(
		productId: string,
		restaurantId: string,
	): Promise<HttpResponse<Product>> {
		const apiLink = this.apiConnection.getLink();

		return await this.httpRequestAdapter.get(
			apiLink + `/product/${productId}?restaurant=${restaurantId}`,
		);
	}

	public async getAllProducts(
		restaurantId: string,
	): Promise<HttpResponse<Product[]>> {
		const apiLink = this.apiConnection.getLink();

		return await this.httpRequestAdapter.get(
			apiLink + `/product?restaurant=${restaurantId}`,
		);
	}
}
