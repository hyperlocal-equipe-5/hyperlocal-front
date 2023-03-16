import { type HttpResponse } from '../../../../domain/dto/http/http-response';
import { type CreateProductDto } from '../../../../domain/dto/product/createProduct-dto';
import { type UpdateProductDto } from '../../../../domain/dto/product/updateProduct-dto';
import { type Product } from '../../../../domain/entities/product';
import { type HttpRequestAdapterInterface } from '../../../../helpers/abstract/adapters/httpRequest-adapter-interface';
import { type TokenHandlerInterface } from '../../../../helpers/abstract/token/tokenHandler-helper-interface';
import { type ApiConnectionInterface } from '../../abstract/connection/apiConnection-abstract';
import { type ProductAdminRouterInterface } from '../../abstract/routers/product/productRouterAdmin-interface';

export class ProductAdminRouter implements ProductAdminRouterInterface {
	private readonly httpRequestAdapter: HttpRequestAdapterInterface;
	private readonly apiConnection: ApiConnectionInterface;
	private readonly tokenHandler: TokenHandlerInterface;

	public constructor(
		httpRequestAdapter: HttpRequestAdapterInterface,
		apiConnection: ApiConnectionInterface,
		tokenHandler: TokenHandlerInterface,
	) {
		this.httpRequestAdapter = httpRequestAdapter;
		this.apiConnection = apiConnection;
		this.tokenHandler = tokenHandler;
	}

	public async createProduct(
		body: CreateProductDto,
	): Promise<HttpResponse<Product>> {
		const apiLink = this.apiConnection.getLink();
		const authentication = this.tokenHandler.getAuthorization();

		return await this.httpRequestAdapter.post(
			apiLink + `/admin/product`,
			body,
			authentication,
		);
	}

	public async deleteProduct(
		productId: string,
		restaurantId: string,
	): Promise<HttpResponse<Product>> {
		const apiLink = this.apiConnection.getLink();
		const authentication = this.tokenHandler.getAuthorization();

		return await this.httpRequestAdapter.delete(
			apiLink + `/admin/product/${productId}?restaurant=${restaurantId}`,
			authentication,
		);
	}

	public async updateProduct(
		productId: string,
		body: UpdateProductDto,
	): Promise<HttpResponse<Product>> {
		const apiLink = this.apiConnection.getLink();
		const authentication = this.tokenHandler.getAuthorization();

		return await this.httpRequestAdapter.patch(
			apiLink + `/admin/product/${productId}`,
			body,
			authentication,
		);
	}
}
