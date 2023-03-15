import { type HttpResponse } from '../../../../../domain/dto/http/http-response';
import { type CreateOrderDto } from '../../../../../domain/dto/order/createOrder-dto';
import { type Order } from '../../../../../domain/entities/order';

export interface OrderRouterInterface {
	getOneOrder: (
		orderId: string,
		restaurantId: string,
	) => Promise<HttpResponse<Order>>;
	getAllOrders: (restaurantId: string) => Promise<HttpResponse<Order[]>>;
	createOrder: (body: CreateOrderDto) => Promise<Order>;
}
