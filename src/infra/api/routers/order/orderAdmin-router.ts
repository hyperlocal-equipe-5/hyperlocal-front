import { type HttpResponse } from '../../../../domain/dto/http/http-response';
import { type CreateOrderDto } from '../../../../domain/dto/order/createOrder-dto';
import { type UpdateOrderDto } from '../../../../domain/dto/order/updateOrder-dto';
import { type Order } from '../../../../domain/entities/order';
import { type HttpRequestAdapterInterface } from '../../../../helpers/abstract/adapters/httpRequest-adapter-interface';
import { type RestaurantIdHandlerInterface } from '../../../../helpers/abstract/handlers/restaurantIdHandler-helper-interface';
import { type TokenHandlerInterface } from '../../../../helpers/abstract/handlers/tokenHandler-helper-interface';
import { type ApiConnectionInterface } from '../../abstract/connection/apiConnection-abstract';
import { type OrderAdminRouterInterface } from '../../abstract/routers/order/orderRouterAdmin-interface';

export class OrderAdminRouter implements OrderAdminRouterInterface {
	private readonly httpRequestAdapter: HttpRequestAdapterInterface;
	private readonly apiConnection: ApiConnectionInterface;
	private readonly tokenHandler: TokenHandlerInterface;
	private readonly restaurantIdHandler: RestaurantIdHandlerInterface;

	public constructor(
		httpRequestAdapter: HttpRequestAdapterInterface,
		apiConnection: ApiConnectionInterface,
		tokenHandler: TokenHandlerInterface,
		restaurantIdHandler: RestaurantIdHandlerInterface,
	) {
		this.httpRequestAdapter = httpRequestAdapter;
		this.apiConnection = apiConnection;
		this.tokenHandler = tokenHandler;
		this.restaurantIdHandler = restaurantIdHandler;
	}

	public async getAllOrders(): Promise<HttpResponse<Order[]>> {
		const apiLink = this.apiConnection.getLink();
		const authentication = this.tokenHandler.getAuthorization();
		const restaurantId = this.restaurantIdHandler.get();

		return await this.httpRequestAdapter.get(
			apiLink + `/admin/order?restaurant=${restaurantId}`,
			authentication,
		);
	}

	public async updateOrder(
		orderId: string,
		body: UpdateOrderDto,
	): Promise<HttpResponse<Order>> {
		const apiLink = this.apiConnection.getLink();
		const authentication = this.tokenHandler.getAuthorization();

		return await this.httpRequestAdapter.patch(
			apiLink + `/admin/order/${orderId}`,
			body,
			authentication,
		);
	}

	public async deleteOrder(orderId: string): Promise<HttpResponse<Order>> {
		const apiLink = this.apiConnection.getLink();
		const authentication = this.tokenHandler.getAuthorization();
		const restaurantId = this.restaurantIdHandler.get();

		return await this.httpRequestAdapter.delete(
			apiLink + `/admin/order/${orderId}?restaurant=${restaurantId}`,
			authentication,
		);
	}

	public async createOrder(body: CreateOrderDto): Promise<HttpResponse<Order>> {
		const apiLink = this.apiConnection.getLink();
		const authentication = this.tokenHandler.getAuthorization();

		return await this.httpRequestAdapter.post(
			apiLink + `/admin/order`,
			body,
			authentication,
		);
	}

	public async getOneOrder(orderId: string): Promise<HttpResponse<Order>> {
		const apiLink = this.apiConnection.getLink();
		const authentication = this.tokenHandler.getAuthorization();
		const restaurantId = this.restaurantIdHandler.get();

		return await this.httpRequestAdapter.get(
			apiLink + `/admin/order/${orderId}?restaurant=${restaurantId}`,
			authentication,
		);
	}
}
