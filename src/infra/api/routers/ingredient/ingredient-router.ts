import { type ApiConnectionInterface } from '../../abstract/connection/apiConnection-abstract';
import { type HttpRequestAdapterInterface } from '../../../../helpers/abstract/adapters/httpRequest-adapter-interface';
import { type HttpResponse } from '../../../../domain/dto/http/http-response';
import { type Ingredient } from '../../../../domain/entities/ingredient';
import { type IngredientRouterInterface } from '../../abstract/routers/ingredient/ingredientRouter-interface';

export class IngredientRouter implements IngredientRouterInterface {
	private readonly httpRequestAdapter: HttpRequestAdapterInterface;
	private readonly apiConnection: ApiConnectionInterface;

	public constructor(
		httpRequestAdapter: HttpRequestAdapterInterface,
		apiConnection: ApiConnectionInterface,
	) {
		this.httpRequestAdapter = httpRequestAdapter;
		this.apiConnection = apiConnection;
	}

	public async getOneIngredient(
		ingredientId: string,
		restaurantId: string,
	): Promise<HttpResponse<Ingredient>> {
		const apiLink = this.apiConnection.getLink();

		return await this.httpRequestAdapter.get(
			apiLink + `/ingredient/${ingredientId}?restaurant=${restaurantId}`,
		);
	}

	public async getAllIngredients(
		restaurantId: string,
	): Promise<HttpResponse<Ingredient[]>> {
		const apiLink = this.apiConnection.getLink();

		return await this.httpRequestAdapter.get(
			apiLink + `/ingredient?restaurant=${restaurantId}`,
		);
	}
}
