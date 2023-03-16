import { type ApiConnectionInterface } from '../../abstract/connection/apiConnection-abstract';
import { type HttpRequestAdapterInterface } from '../../../../helpers/abstract/adapters/httpRequest-adapter-interface';
import { type IngredientAdminRouterInterface } from '../../abstract/routers/ingredient/ingredientAdminRouter-interface';
import { type HttpResponse } from '../../../../domain/dto/http/http-response';
import { type CreateIngredientDto } from '../../../../domain/dto/ingredient/createIngredient-dto';
import { type UpdateIngredientDto } from '../../../../domain/dto/ingredient/updateIngredient-dto';
import { type Ingredient } from '../../../../domain/entities/ingredient';
import { type TokenHandlerInterface } from '../../../../helpers/abstract/token/tokenHandler-helper-interface';

export class IngredientAdminRouter implements IngredientAdminRouterInterface {
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

	public async createIngredient(
		body: CreateIngredientDto,
	): Promise<HttpResponse<Ingredient>> {
		const apiLink = this.apiConnection.getLink();
		const authentication = this.tokenHandler.getAuthorization();

		return await this.httpRequestAdapter.post(
			apiLink + '/admin/ingredient',
			body,
			authentication,
		);
	}

	public async deleteIngredient(
		ingredientId: string,
		restaurantId: string,
	): Promise<HttpResponse<Ingredient>> {
		const apiLink = this.apiConnection.getLink();
		const authentication = this.tokenHandler.getAuthorization();

		return await this.httpRequestAdapter.delete(
			apiLink + `/admin/ingredient/${ingredientId}?restaurant=${restaurantId}`,
			authentication,
		);
	}

	public async updateIngredient(
		ingredientId: string,
		body: UpdateIngredientDto,
	): Promise<HttpResponse<Ingredient>> {
		const apiLink = this.apiConnection.getLink();
		const authentication = this.tokenHandler.getAuthorization();

		return await this.httpRequestAdapter.patch(
			apiLink + `/admin/ingredient/${ingredientId}`,
			body,
			authentication,
		);
	}
}
