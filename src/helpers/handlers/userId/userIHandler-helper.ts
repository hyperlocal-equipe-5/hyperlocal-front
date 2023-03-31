import { type UserIdHandlerInterface } from '../../abstract/handlers/userIdHandler-helper-interface';
import { Handler } from '../class/haldler';

export class UserIdHandler extends Handler implements UserIdHandlerInterface {
	public constructor() {
		super('userId');
	}
}
