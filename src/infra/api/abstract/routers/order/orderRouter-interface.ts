import { type HttpResponse } from '../../../../../domain/dto/http/http-response';
import { type CreateOrderDto } from '../../../../../domain/dto/order/createOrder-dto';
import { type Order } from '../../../../../domain/entities/order';

export interface OrderRouterInterface {
	createOrder: (body: CreateOrderDto) => Promise<HttpResponse<Order>>;
}
