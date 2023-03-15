import { type ApiConnectionInterface } from '../abstract/connection/apiConnection-abstract';

export class ApiConnection implements ApiConnectionInterface {
	private readonly apiLink: string;

	public constructor() {
		this.apiLink = 'https://www.fakeLink.com';
	}

	public getLink(): string {
		return this.apiLink;
	}
}
