import { type ApiConnectionInterface } from '../../abstract/connection/apiConnection-abstract';
import { type HttpRequestAdapterInterface } from '../../../../helpers/abstract/adapters/httpRequest-adapter-interface';
import { type HttpResponse } from '../../../../domain/dto/http/http-response';
import { type Category } from '../../../../domain/entities/category';
import { type CreateCategoryDto } from '../../../../domain/dto/category/createCategory-dto';
import { type UpdateCategoryDto } from '../../../../domain/dto/category/updateCategory-dto';
import { type CategoryAdminRouterInterface } from '../../abstract/routers/category/categoryAdminRouter-interface';
import { type TokenHandlerInterface } from '../../../../helpers/abstract/handlers/tokenHandler-helper-interface';
import { type RestaurantIdHandlerInterface } from '../../../../helpers/abstract/handlers/restaurantIdHandler-helper-interface';

export class CategoryAdminRouter implements CategoryAdminRouterInterface {
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

	public async createCategory(
		body: CreateCategoryDto,
	): Promise<HttpResponse<Category>> {
		const apiLink = this.apiConnection.getLink();
		const authentication = this.tokenHandler.getAuthorization();

		return await this.httpRequestAdapter.post(
			apiLink + `/admin/category`,
			body,
			authentication,
		);
	}

	public async deleteCategory(
		categoryId: string,
	): Promise<HttpResponse<Category>> {
		const apiLink = this.apiConnection.getLink();
		const authentication = this.tokenHandler.getAuthorization();
		const restaurantId = this.restaurantIdHandler.get();

		return await this.httpRequestAdapter.delete(
			apiLink + `/admin/category/${categoryId}?restaurant=${restaurantId}`,

			authentication,
		);
	}

	public async updateCategory(
		categoryId: string,
		body: UpdateCategoryDto,
	): Promise<HttpResponse<Category>> {
		const apiLink = this.apiConnection.getLink();
		const authentication = this.tokenHandler.getAuthorization();

		return await this.httpRequestAdapter.patch(
			apiLink + `/admin/category/${categoryId}`,
			body,
			authentication,
		);
	}
}
