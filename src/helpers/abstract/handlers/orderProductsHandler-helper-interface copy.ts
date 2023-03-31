import { type HandlerInterface } from './handler-helper-interface';

export interface OrderProductsHandlerInterface extends HandlerInterface {
	addProduct: (productId: string) => void;
	getProducts: () => string[];
}
