import { type RestaurantIdHandlerInterface } from '../../abstract/handlers/restaurantIdHandler-helper-interface';
import { Handler } from '../class/haldler';

export class RestaurantIdHandler
	extends Handler
	implements RestaurantIdHandlerInterface
{
	public constructor() {
		super('restaurantId');
	}
}
