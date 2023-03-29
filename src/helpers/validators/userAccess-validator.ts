import { type User } from '../../domain/entities/user';
import { makeUserRouterFactory } from '../../infra/api/factories/routers/user/userRouter-factory';
import { type UserAccess } from '../../types/UserAccessType';

export function userAccessValidator(
	user: User,
	accessType: UserAccess,
): boolean {
	if (!user?.role?.access?.[accessType]) {
		return false;
	}

	return true;
}
