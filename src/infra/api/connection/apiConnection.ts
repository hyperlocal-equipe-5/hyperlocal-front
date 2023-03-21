import { type ApiConnectionInterface } from '../abstract/connection/apiConnection-abstract';

export class ApiConnection implements ApiConnectionInterface {
	private readonly apiLink: string;

	public constructor() {
		this.apiLink = 'https://hyperlocal-back-production-fb0e.up.railway.app';
	}

	public getLink(): string {
		return this.apiLink;
	}
}
