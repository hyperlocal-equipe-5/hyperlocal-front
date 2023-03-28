import { type ApiConnectionInterface } from '../../abstract/connection/apiConnection-abstract';
import { type HttpRequestAdapterInterface } from '../../../../helpers/abstract/adapters/httpRequest-adapter-interface';
import { type HttpResponse } from '../../../../domain/dto/http/http-response';
import { type ReviewQuestion } from '../../../../domain/entities/reviewQuestion';
import { type TokenHandlerInterface } from '../../../../helpers/abstract/handlers/tokenHandler-helper-interface';
import { type CreateReviewQuestionDto } from '../../../../domain/dto/reviewQuestion/createReviewQuestion-dto';
import { type UpdateReviewQuestionDto } from '../../../../domain/dto/reviewQuestion/updateReviewQuestion-dto';

export class ReviewQuestionAdminRouter {
	private readonly httpRequestAdapter: HttpRequestAdapterInterface;
	private readonly apiConnection: ApiConnectionInterface;
	private readonly tokanHandler: TokenHandlerInterface;

	public constructor(
		httpRequestAdapter: HttpRequestAdapterInterface,
		apiConnection: ApiConnectionInterface,
		tokanHandler: TokenHandlerInterface,
	) {
		this.httpRequestAdapter = httpRequestAdapter;
		this.apiConnection = apiConnection;
		this.tokanHandler = tokanHandler;
	}

	public async create(
		createReviewQuestionDto: CreateReviewQuestionDto,
	): Promise<HttpResponse<ReviewQuestion>> {
		const apiLink = this.apiConnection.getLink();
		const authorization = this.tokanHandler.getAuthorization();

		return await this.httpRequestAdapter.post(
			apiLink + `/admin/review-question`,
			createReviewQuestionDto,
			authorization,
		);
	}

	public async delete(
		reviewQuestionId: string,
	): Promise<HttpResponse<ReviewQuestion>> {
		const apiLink = this.apiConnection.getLink();
		const authorization = this.tokanHandler.getAuthorization();

		return await this.httpRequestAdapter.delete(
			apiLink + `/admin/review-question/${reviewQuestionId}`,
			authorization,
		);
	}

	public async update(
		updateReviewQuestionDto: UpdateReviewQuestionDto,
	): Promise<HttpResponse<ReviewQuestion>> {
		const apiLink = this.apiConnection.getLink();
		const authorization = this.tokanHandler.getAuthorization();

		return await this.httpRequestAdapter.patch(
			apiLink + `/admin/review-question/${updateReviewQuestionDto.id}`,
			updateReviewQuestionDto,
			authorization,
		);
	}
}
