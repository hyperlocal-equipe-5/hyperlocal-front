import { type HttpResponse } from '../../../../../domain/dto/http/http-response';
import { type RequestPasswordRecoveryDto } from '../../../../../domain/dto/passwordRecovery/requestPasswordRecovery-dto';
import { type UpdatePasswordDto } from '../../../../../domain/dto/passwordRecovery/updatePassword-dto';
import { type User } from '../../../../../domain/entities/user';

export interface PasswordRecoveryRouterInterface {
	requestRecovery: (
		passwordRecoveryRequestData: RequestPasswordRecoveryDto,
	) => Promise<
		HttpResponse<{
			message: string;
		}>
	>;
	recoverPassword: (
		passwordRecoveryData: UpdatePasswordDto,
	) => Promise<HttpResponse<User>>;
}
