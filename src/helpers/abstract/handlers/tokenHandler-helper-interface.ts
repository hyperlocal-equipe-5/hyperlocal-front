import { type HandlerInterface } from './handler-helper-interface';

export interface TokenHandlerInterface extends HandlerInterface {
	getAuthorization: () => string;
}
