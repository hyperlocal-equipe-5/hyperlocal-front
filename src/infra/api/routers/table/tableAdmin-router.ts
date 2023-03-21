import { type HttpResponse } from '../../../../domain/dto/http/http-response';
import { type CreateTableDto } from '../../../../domain/dto/table/createTable-dto';
import { type UpdateTableDto } from '../../../../domain/dto/table/updateTable-dto';
import { type Table } from '../../../../domain/entities/table';
import { type HttpRequestAdapterInterface } from '../../../../helpers/abstract/adapters/httpRequest-adapter-interface';
import { type RestaurantIdHandlerInterface } from '../../../../helpers/abstract/handlers/restaurantIdHandler-helper-interface';
import { type TokenHandlerInterface } from '../../../../helpers/abstract/handlers/tokenHandler-helper-interface';
import { type ApiConnectionInterface } from '../../abstract/connection/apiConnection-abstract';
import { type TableAdminRouterInterface } from '../../abstract/routers/table/tableRouterAdmin-interface';

export class TableAdminRouter implements TableAdminRouterInterface {
	private readonly httpRequestAdapter: HttpRequestAdapterInterface;
	private readonly apiConnection: ApiConnectionInterface;
	private readonly tokenHandler: TokenHandlerInterface;
	private readonly restaurantIdHandler: RestaurantIdHandlerInterface;

	public constructor(
		httpRequestAdapter: HttpRequestAdapterInterface,
		apiConnection: ApiConnectionInterface,
		tokenHandler: TokenHandlerInterface,
		restaurantIdHandler: RestaurantIdHandlerInterface,
	) {
		this.httpRequestAdapter = httpRequestAdapter;
		this.apiConnection = apiConnection;
		this.tokenHandler = tokenHandler;
		this.restaurantIdHandler = restaurantIdHandler;
	}

	public async createTable(body: CreateTableDto): Promise<HttpResponse<Table>> {
		const apiLink = this.apiConnection.getLink();
		const authentication = this.tokenHandler.getAuthorization();

		return await this.httpRequestAdapter.post(
			apiLink + `/admin/table`,
			body,
			authentication,
		);
	}

	public async deleteTable(tableId: string): Promise<HttpResponse<Table>> {
		const apiLink = this.apiConnection.getLink();
		const authentication = this.tokenHandler.getAuthorization();
		const restaurantId = this.restaurantIdHandler.get();

		return await this.httpRequestAdapter.delete(
			apiLink + `/admin/table/${tableId}?restaurant=${restaurantId}`,
			authentication,
		);
	}

	public async updateTable(
		tableId: string,
		body: UpdateTableDto,
	): Promise<HttpResponse<Table>> {
		const apiLink = this.apiConnection.getLink();
		const authentication = this.tokenHandler.getAuthorization();

		return await this.httpRequestAdapter.post(
			apiLink + `/admin/table/${tableId}`,
			body,
			authentication,
		);
	}
}
