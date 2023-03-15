import { type ApiConnectionInterface } from '../../abstract/connection/apiConnection-abstract';
import { type HttpRequestAdapterInterface } from '../../../../helpers/abstract/adapters/httpRequest-adapter-interface';
import { type HttpResponse } from '../../../../domain/dto/http/http-response';
import { type Order } from '../../../../domain/entities/order';
import { type OrderRouterInterface } from '../../abstract/routers/order/orderRouter-interface';

export class OrderRouter implements OrderRouterInterface {
	private readonly httpRequestAdapter: HttpRequestAdapterInterface;
	private readonly apiConnection: ApiConnectionInterface;

	public constructor(
		httpRequestAdapter: HttpRequestAdapterInterface,
		apiConnection: ApiConnectionInterface,
	) {
		this.httpRequestAdapter = httpRequestAdapter;
		this.apiConnection = apiConnection;
	}

	public async getOneOrder(
		orderId: string,
		restaurantId: string,
	): Promise<HttpResponse<Order>> {
		const apiLink = this.apiConnection.getLink();

		return await this.httpRequestAdapter.get(
			apiLink + `/order/${orderId}?restaurant=${restaurantId}`,
		);
	}

	public async getAllOrders(
		restaurantId: string,
	): Promise<HttpResponse<Order[]>> {
		const apiLink = this.apiConnection.getLink();

		return await this.httpRequestAdapter.get(
			apiLink + `/order?restaurant=${restaurantId}`,
		);
	}
}
