import { type HttpResponse } from '../../../../../domain/dto/http/http-response';
import { type CreateRoleDto } from '../../../../../domain/dto/role/createRole-dto';
import { type UpdateRoleDto } from '../../../../../domain/dto/role/updateRole-dto';
import { type Role } from '../../../../../domain/entities/role';

export interface RoleAdminRouterInterface {
	createRole: (body: CreateRoleDto) => Promise<HttpResponse<Role>>;
	deleteRole: (
		roleId: string,
		restaurantId: string,
	) => Promise<HttpResponse<Role>>;
	updateRole: (
		roleId: string,
		body: UpdateRoleDto,
	) => Promise<HttpResponse<Role>>;
	getOneRole: (
		roleId: string,
		restaurantId: string,
	) => Promise<HttpResponse<Role>>;
	getAllRoles: (restaurantId: string) => Promise<HttpResponse<Role[]>>;
}
