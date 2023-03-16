import { type ApiConnectionInterface } from '../../abstract/connection/apiConnection-abstract';
import { type HttpRequestAdapterInterface } from '../../../../helpers/abstract/adapters/httpRequest-adapter-interface';
import { type Order } from '../../../../domain/entities/order';
import { type OrderRouterInterface } from '../../abstract/routers/order/orderRouter-interface';
import { type CreateOrderDto } from '../../../../domain/dto/order/createOrder-dto';
import { type HttpResponse } from '../../../../domain/dto/http/http-response';

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

	public async createOrder(body: CreateOrderDto): Promise<HttpResponse<Order>> {
		const apiLink = this.apiConnection.getLink();

		return await this.httpRequestAdapter.post(apiLink + '/order', body);
	}
}
