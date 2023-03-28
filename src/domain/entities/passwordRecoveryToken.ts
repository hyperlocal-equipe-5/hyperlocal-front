import { type User } from '@prisma/client';

export interface PasswordRecovery {
	token: string;
	user: User;
}
