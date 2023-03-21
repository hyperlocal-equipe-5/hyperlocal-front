import { type ApiConnectionInterface } from '../../abstract/connection/apiConnection-abstract';
import { type HttpRequestAdapterInterface } from '../../../../helpers/abstract/adapters/httpRequest-adapter-interface';
import { type HttpResponse } from '../../../../domain/dto/http/http-response';
import { type Ingredient } from '../../../../domain/entities/ingredient';
import { type IngredientRouterInterface } from '../../abstract/routers/ingredient/ingredientRouter-interface';
import { type RestaurantIdHandlerInterface } from '../../../../helpers/abstract/handlers/restaurantIdHandler-helper-interface';

export class IngredientRouter implements IngredientRouterInterface {
	private readonly httpRequestAdapter: HttpRequestAdapterInterface;
	private readonly apiConnection: ApiConnectionInterface;
	private readonly restaurantIdHandler: RestaurantIdHandlerInterface;

	public constructor(
		httpRequestAdapter: HttpRequestAdapterInterface,
		apiConnection: ApiConnectionInterface,
		restaurantIdHandler: RestaurantIdHandlerInterface,
	) {
		this.httpRequestAdapter = httpRequestAdapter;
		this.apiConnection = apiConnection;
		this.restaurantIdHandler = restaurantIdHandler;
	}

	public async getOneIngredient(
		ingredientId: string,
	): Promise<HttpResponse<Ingredient>> {
		const apiLink = this.apiConnection.getLink();
		const restaurantId = this.restaurantIdHandler.get();

		return await this.httpRequestAdapter.get(
			apiLink + `/ingredient/${ingredientId}?restaurant=${restaurantId}`,
		);
	}

	public async getAllIngredients(): Promise<HttpResponse<Ingredient[]>> {
		const apiLink = this.apiConnection.getLink();
		const restaurantId = this.restaurantIdHandler.get();

		return await this.httpRequestAdapter.get(
			apiLink + `/ingredient?restaurant=${restaurantId}`,
		);
	}
}
