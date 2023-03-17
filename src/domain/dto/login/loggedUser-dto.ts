import { type User } from '../../entities/user';

export interface LoggedUser {
	token: string;
	user: User;
}
