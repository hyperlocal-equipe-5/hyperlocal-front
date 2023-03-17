import { type ApiConnectionInterface } from '../abstract/connection/apiConnection-abstract';

export class ApiConnection implements ApiConnectionInterface {
	private readonly apiLink: string;

	public constructor() {
		this.apiLink = 'http://localhost:7777';
	}

	public getLink(): string {
		return this.apiLink;
	}
}
