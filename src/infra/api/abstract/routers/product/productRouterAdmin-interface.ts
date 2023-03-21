import { type HttpResponse } from '../../../../../domain/dto/http/http-response';
import { type CreateProductDto } from '../../../../../domain/dto/product/createProduct-dto';
import { type UpdateProductDto } from '../../../../../domain/dto/product/updateProduct-dto';
import { type Product } from '../../../../../domain/entities/product';

export interface ProductAdminRouterInterface {
	createProduct: (body: CreateProductDto) => Promise<HttpResponse<Product>>;
	deleteProduct: (productId: string) => Promise<HttpResponse<Product>>;
	updateProduct: (
		productId: string,
		body: UpdateProductDto,
	) => Promise<HttpResponse<Product>>;
}
