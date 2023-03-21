import { type ApiConnectionInterface } from '../../abstract/connection/apiConnection-abstract';
import { type HttpRequestAdapterInterface } from '../../../../helpers/abstract/adapters/httpRequest-adapter-interface';
import { type HttpResponse } from '../../../../domain/dto/http/http-response';
import { type CreateRoleDto } from '../../../../domain/dto/role/createRole-dto';
import { type Role } from '../../../../domain/entities/role';
import { type UpdateRoleDto } from '../../../../domain/dto/role/updateRole-dto';
import { type TokenHandler } from '../../../../helpers/handlers/token/tokenHandler-helper';
import { type RoleAdminRouterInterface } from '../../abstract/routers/role/roleRouterAdmin-interface';
import { type RestaurantIdHandlerInterface } from '../../../../helpers/abstract/handlers/restaurantIdHandler-helper-interface';

export class RoleAdminRouter implements RoleAdminRouterInterface {
	private readonly httpRequestAdapter: HttpRequestAdapterInterface;
	private readonly apiConnection: ApiConnectionInterface;
	private readonly tokenHandler: TokenHandler;
	private readonly restaurantIdHandler: RestaurantIdHandlerInterface;

	public constructor(
		httpRequestAdapter: HttpRequestAdapterInterface,
		apiConnection: ApiConnectionInterface,
		tokenHandler: TokenHandler,
		restaurantIdHandler: RestaurantIdHandlerInterface,
	) {
		this.httpRequestAdapter = httpRequestAdapter;
		this.apiConnection = apiConnection;
		this.tokenHandler = tokenHandler;
		this.restaurantIdHandler = restaurantIdHandler;
	}

	public async createRole(body: CreateRoleDto): Promise<HttpResponse<Role>> {
		const apiLink = this.apiConnection.getLink();
		const authorization = this.tokenHandler.getAuthorization();

		return await this.httpRequestAdapter.post(
			apiLink + '/admin/role',
			body,
			authorization,
		);
	}

	public async deleteRole(roleId: string): Promise<HttpResponse<Role>> {
		const apiLink = this.apiConnection.getLink();
		const authorization = this.tokenHandler.getAuthorization();
		const restaurantId = this.restaurantIdHandler.get();

		return await this.httpRequestAdapter.delete(
			apiLink + `/admin/role/${roleId}?restaurant=${restaurantId}`,
			authorization,
		);
	}

	public async updateRole(
		roleId: string,
		body: UpdateRoleDto,
	): Promise<HttpResponse<Role>> {
		const apiLink = this.apiConnection.getLink();
		const authorization = this.tokenHandler.getAuthorization();

		return await this.httpRequestAdapter.patch(
			apiLink + `/admin/role/${roleId}`,
			body,
			authorization,
		);
	}

	public async getOneRole(roleId: string): Promise<HttpResponse<Role>> {
		const apiLink = this.apiConnection.getLink();
		const authorization = this.tokenHandler.getAuthorization();
		const restaurantId = this.restaurantIdHandler.get();

		return await this.httpRequestAdapter.get(
			apiLink + `/admin/role/${roleId}?restaurant=${restaurantId}`,
			authorization,
		);
	}

	public async getAllRoles(): Promise<HttpResponse<Role[]>> {
		const apiLink = this.apiConnection.getLink();
		const authorization = this.tokenHandler.getAuthorization();
		const restaurantId = this.restaurantIdHandler.get();

		return await this.httpRequestAdapter.get(
			apiLink + `/admin/role?restaurant=${restaurantId}`,
			authorization,
		);
	}
}
