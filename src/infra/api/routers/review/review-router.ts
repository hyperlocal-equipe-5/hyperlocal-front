import { type ApiConnectionInterface } from '../../abstract/connection/apiConnection-abstract';
import { type HttpRequestAdapterInterface } from '../../../../helpers/abstract/adapters/httpRequest-adapter-interface';
import { type HttpResponse } from '../../../../domain/dto/http/http-response';
import { type CreateReviewDto } from '../../../../domain/dto/review/createReview-dto';
import { type Review } from '../../../../domain/entities/review';
import { type ReviewRouterInterface } from '../../abstract/routers/review/review-router';

export class ReviewRouter implements ReviewRouterInterface {
	private readonly httpRequestAdapter: HttpRequestAdapterInterface;
	private readonly apiConnection: ApiConnectionInterface;

	public constructor(
		httpRequestAdapter: HttpRequestAdapterInterface,
		apiConnection: ApiConnectionInterface,
	) {
		this.httpRequestAdapter = httpRequestAdapter;
		this.apiConnection = apiConnection;
	}

	public async postReview(
		body: CreateReviewDto,
	): Promise<HttpResponse<Review>> {
		const apiLink = this.apiConnection.getLink();

		return await this.httpRequestAdapter.post(apiLink + `/reviews`, body);
	}
}
