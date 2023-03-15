import { type HttpResponse } from '../../../../../domain/dto/http/http-response';
import { type Order } from '../../../../../domain/entities/order';

export interface OrderRouterInterface {
	getOneOrder: (
		orderId: string,
		restaurantId: string,
	) => Promise<HttpResponse<Order>>;
	getAllOrders: (restaurantId: string) => Promise<HttpResponse<Order[]>>;
}
