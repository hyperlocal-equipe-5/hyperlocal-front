import { type HttpResponse } from '../../../../../domain/dto/http/http-response';
import { type CreateTableDto } from '../../../../../domain/dto/table/createTable-dto';
import { type UpdateTableDto } from '../../../../../domain/dto/table/updateTable-dto';
import { type Table } from '../../../../../domain/entities/table';

export interface TableAdminRouterInterface {
	createTable: (body: CreateTableDto) => Promise<HttpResponse<Table>>;
	deleteTable: (tableId: string) => Promise<HttpResponse<Table>>;
	updateTable: (
		tableId: string,
		body: UpdateTableDto,
	) => Promise<HttpResponse<Table>>;
}
