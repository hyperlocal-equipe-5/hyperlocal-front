import { type ApiConnectionInterface } from '../../abstract/connection/apiConnection-abstract';
import { type HttpRequestAdapterInterface } from '../../../../helpers/abstract/adapters/httpRequest-adapter-interface';
import { type HttpResponse } from '../../../../domain/dto/http/http-response';
import { type Table } from '../../../../domain/entities/table';
import { type TableRouterInterface } from '../../abstract/routers/table/tableRouter-interface';

export class TableRouter implements TableRouterInterface {
	private readonly httpRequestAdapter: HttpRequestAdapterInterface;
	private readonly apiConnection: ApiConnectionInterface;

	public constructor(
		httpRequestAdapter: HttpRequestAdapterInterface,
		apiConnection: ApiConnectionInterface,
	) {
		this.httpRequestAdapter = httpRequestAdapter;
		this.apiConnection = apiConnection;
	}

	public async getOneTable(
		tableId: string,
		restaurantId: string,
	): Promise<HttpResponse<Table>> {
		const apiLink = this.apiConnection.getLink();

		return await this.httpRequestAdapter.get(
			apiLink + `/table/${tableId}?restaurant=${restaurantId}`,
		);
	}

	public async getAllTables(
		restaurantId: string,
	): Promise<HttpResponse<Table[]>> {
		const apiLink = this.apiConnection.getLink();

		return await this.httpRequestAdapter.get(
			apiLink + `/table?restaurant=${restaurantId}`,
		);
	}
}
