import { type ApiConnectionInterface } from '../../abstract/connection/apiConnection-abstract';
import { type HttpRequestAdapterInterface } from '../../../../helpers/abstract/adapters/httpRequest-adapter-interface';
import { type HttpResponse } from '../../../../domain/dto/http/http-response';
import { type ReviewQuestion } from '../../../../domain/entities/reviewQuestion';

export class ReviewQuestionRouter {
	private readonly httpRequestAdapter: HttpRequestAdapterInterface;
	private readonly apiConnection: ApiConnectionInterface;

	public constructor(
		httpRequestAdapter: HttpRequestAdapterInterface,
		apiConnection: ApiConnectionInterface,
	) {
		this.httpRequestAdapter = httpRequestAdapter;
		this.apiConnection = apiConnection;
	}

	public async getAll(): Promise<HttpResponse<ReviewQuestion[]>> {
		const apiLink = this.apiConnection.getLink();

		return await this.httpRequestAdapter.get(apiLink + `/review-question`);
	}

	public async getOne(
		reviewQuestionId: string,
	): Promise<HttpResponse<ReviewQuestion>> {
		const apiLink = this.apiConnection.getLink();

		return await this.httpRequestAdapter.get(
			apiLink + `/review-question/${reviewQuestionId}`,
		);
	}
}
