export interface TokenHandlerInterface {
	storeToken: (token: string) => void;
	removeToken: () => void;
	getAuthorization: () => string;
}
