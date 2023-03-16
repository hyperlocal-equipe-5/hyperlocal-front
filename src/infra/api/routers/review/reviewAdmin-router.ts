import { type HttpResponse } from '../../../../domain/dto/http/http-response';
import { type Review } from '../../../../domain/entities/review';
import { type HttpRequestAdapterInterface } from '../../../../helpers/abstract/adapters/httpRequest-adapter-interface';
import { type TokenHandlerInterface } from '../../../../helpers/abstract/token/tokenHandler-helper-interface';
import { type ApiConnectionInterface } from '../../abstract/connection/apiConnection-abstract';
import { type ReviewAdminRouterInterface } from '../../abstract/routers/review/reviewRouterAdmin-interface';

export class ReviewAdminRouter implements ReviewAdminRouterInterface {
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

	public async getAllReviews(
		restaurantId: string,
	): Promise<HttpResponse<Review[]>> {
		const apiLink = this.apiConnection.getLink();
		const authentication = this.tokenHandler.getAuthorization();

		return await this.httpRequestAdapter.get(
			apiLink + `/admin/review?restaurant=${restaurantId}`,
			authentication,
		);
	}

	public async getOneReview(
		reviewId: string,
		restaurantId: string,
	): Promise<HttpResponse<Review>> {
		const apiLink = this.apiConnection.getLink();
		const authentication = this.tokenHandler.getAuthorization();

		return await this.httpRequestAdapter.get(
			apiLink + `/admin/review/${reviewId}?restaurant=${restaurantId}`,
			authentication,
		);
	}

	public async deleteReview(
		reviewId: string,
		restaurantId: string,
	): Promise<HttpResponse<Review>> {
		const apiLink = this.apiConnection.getLink();
		const authentication = this.tokenHandler.getAuthorization();

		return await this.httpRequestAdapter.delete(
			apiLink + `/admin/review/${reviewId}?restaurant=${restaurantId}`,
			authentication,
		);
	}
}
