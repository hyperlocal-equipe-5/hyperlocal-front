import { type ApiConnectionInterface } from '../../abstract/connection/apiConnection-abstract';
import { type HttpRequestAdapterInterface } from '../../../../helpers/abstract/adapters/httpRequest-adapter-interface';
import { type HttpResponse } from '../../../../domain/dto/http/http-response';
import { type Table } from '../../../../domain/entities/table';
import { type TableRouterInterface } from '../../abstract/routers/table/tableRouter-interface';
import { type RestaurantIdHandlerInterface } from '../../../../helpers/abstract/handlers/restaurantIdHandler-helper-interface';

export class TableRouter implements TableRouterInterface {
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

	public async getOneTable(tableId: string): Promise<HttpResponse<Table>> {
		const apiLink = this.apiConnection.getLink();
		const restaurantId = this.restaurantIdHandler.get();

		return await this.httpRequestAdapter.get(
			apiLink + `/table/${tableId}?restaurant=${restaurantId}`,
		);
	}

	public async getAllTables(): Promise<HttpResponse<Table[]>> {
		const apiLink = this.apiConnection.getLink();
		const restaurantId = this.restaurantIdHandler.get();

		return await this.httpRequestAdapter.get(
			apiLink + `/table?restaurant=${restaurantId}`,
		);
	}
}
