import { type HttpResponse } from '../../../../../domain/dto/http/http-response';
import { type Table } from '../../../../../domain/entities/table';

export interface TableRouterInterface {
	getOneTable: (
		tableId: string,
		restaurantId: string,
	) => Promise<HttpResponse<Table>>;
	getAllTables: (restaurantId: string) => Promise<HttpResponse<Table[]>>;
}
