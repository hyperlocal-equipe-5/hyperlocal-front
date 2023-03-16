import { type HttpResponse } from '../../../../../domain/dto/http/http-response';
import { type Product } from '../../../../../domain/entities/product';

export interface ProductRouterInterface {
	getOneProduct: (
		productId: string,
		restaurantId: string,
	) => Promise<HttpResponse<Product>>;
	getAllProducts: (restaurantId: string) => Promise<HttpResponse<Product[]>>;
}
