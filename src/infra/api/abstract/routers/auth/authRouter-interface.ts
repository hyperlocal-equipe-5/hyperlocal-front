import { type HttpResponse } from '../../../../../domain/dto/http/http-response';
import { type LoggedUser } from '../../../../../domain/dto/login/loggedUser-dto';
import { type LoginDto } from '../../../../../domain/dto/login/login-dto';

export interface AuthRouterInterface {
	login: (loginData: LoginDto) => Promise<HttpResponse<LoggedUser>>;
}
