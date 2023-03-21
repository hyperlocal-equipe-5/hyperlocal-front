import { type HttpResponse } from '../../../../../domain/dto/http/http-response';
import { type Product } from '../../../../../domain/entities/product';

export interface ProductRouterInterface {
	getOneProduct: (productId: string) => Promise<HttpResponse<Product>>;
	getAllProducts: () => Promise<HttpResponse<Product[]>>;
}
