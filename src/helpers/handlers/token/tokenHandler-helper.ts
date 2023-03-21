import { type TokenHandlerInterface } from '../../abstract/handlers/tokenHandler-helper-interface';
import { Handler } from '../class/haldler';

export class TokenHandler extends Handler implements TokenHandlerInterface {
	public constructor() {
		super('userAuthToken');
	}

	public getAuthorization(): string {
		const token = localStorage.getItem(this.handlerName) ?? '';

		return `Bearer ${token}`;
	}
}
