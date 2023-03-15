import { type TokenHandlerInterface } from '../abstract/token/tokenHandler-helper-interface';

export class TokenHandler implements TokenHandlerInterface {
	public storeToken(token: string): void {
		localStorage.setItem('userAuthToken', token);
	}

	public removeToken(): void {
		localStorage.removeItem('userAuthToken');
	}

	public getAuthorization(): string {
		const token = localStorage.getItem('userAuthToken') ?? '';

		return `Bearer ${token}`;
	}
}
