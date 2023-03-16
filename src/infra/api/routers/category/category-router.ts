import { type ApiConnectionInterface } from '../../abstract/connection/apiConnection-abstract';
import { type HttpRequestAdapterInterface } from '../../../../helpers/abstract/adapters/httpRequest-adapter-interface';
import { type HttpResponse } from '../../../../domain/dto/http/http-response';
import { type Category } from '../../../../domain/entities/category';
import { type CategoryRouterInterface } from '../../abstract/routers/category/categoryRouter-interface';

export class CategoryRouter implements CategoryRouterInterface {
	private readonly httpRequestAdapter: HttpRequestAdapterInterface;
	private readonly apiConnection: ApiConnectionInterface;

	public constructor(
		httpRequestAdapter: HttpRequestAdapterInterface,
		apiConnection: ApiConnectionInterface,
	) {
		this.httpRequestAdapter = httpRequestAdapter;
		this.apiConnection = apiConnection;
	}

	public async getOneCategory(
		categoryId: string,
		restaurantId: string,
	): Promise<HttpResponse<Category>> {
		const apiLink = this.apiConnection.getLink();

		return await this.httpRequestAdapter.get(
			apiLink + `/category/${categoryId}?restaurant=${restaurantId}`,
		);
	}

	public async getAllCategories(
		restaurantId: string,
	): Promise<HttpResponse<Category[]>> {
		const apiLink = this.apiConnection.getLink();

		return await this.httpRequestAdapter.get(
			apiLink + `/category?restaurant=${restaurantId}`,
		);
	}
}
