import { type OrderProductsHandlerInterface } from '../../abstract/handlers/orderProductsHandler-helper-interface copy';
import { Handler } from '../class/haldler';

export class OrderProductsHandler
	extends Handler
	implements OrderProductsHandlerInterface
{
	public constructor() {
		super('orderProductsId');
	}

	public addProduct(productId: string): void {
		const productIds = this.get() + `,${productId}`;
		this.store(productIds);
	}

	public getProducts(): string[] {
		const productIds = this.get().split(',');
		productIds.shift();

		return productIds;
	}
}
