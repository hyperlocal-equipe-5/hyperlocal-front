import { type HttpResponse } from '../../../../../domain/dto/http/http-response';
import { type CreateOrderDto } from '../../../../../domain/dto/order/createOrder-dto';
import { type UpdateOrderDto } from '../../../../../domain/dto/order/updateOrder-dto';
import { type Order } from '../../../../../domain/entities/order';

export interface OrderAdminRouterInterface {
	getOneOrder: (
		orderId: string,
		restaurantId: string,
	) => Promise<HttpResponse<Order>>;
	getAllOrders: (restaurantId: string) => Promise<HttpResponse<Order[]>>;
	updateOrder: (
		orderId: string,
		body: UpdateOrderDto,
	) => Promise<HttpResponse<Order>>;
	deleteOrder: (
		orderId: string,
		restaurantId: string,
	) => Promise<HttpResponse<Order>>;
	createOrder: (body: CreateOrderDto) => Promise<HttpResponse<Order>>;
}
