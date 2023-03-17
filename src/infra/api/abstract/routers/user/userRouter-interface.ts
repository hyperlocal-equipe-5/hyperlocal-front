import { type HttpResponse } from '../../../../../domain/dto/http/http-response';
import { type CreateUserDto } from '../../../../../domain/dto/user/createUser-dto';
import { type UpdateUserDto } from '../../../../../domain/dto/user/updateUser-dto';
import { type User } from '../../../../../domain/entities/user';

export interface UserRouterInterface {
	createUser: (body: CreateUserDto) => Promise<HttpResponse<User>>;
	deleteUser: (
		userId: string,
		restaurantId: string,
	) => Promise<HttpResponse<User>>;
	updateUser: (
		userId: string,
		body: UpdateUserDto,
	) => Promise<HttpResponse<User>>;
	getOneUser: (
		userId: string,
		restaurantId: string,
	) => Promise<HttpResponse<User>>;
}
