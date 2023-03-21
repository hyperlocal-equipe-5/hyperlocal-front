import { type HttpResponse } from '../../../../../domain/dto/http/http-response';
import { type Restaurant } from '../../../../../domain/entities/restaurant';

export interface RestaurantRouterInterface {
	getOneRestaurant: (id: string) => Promise<HttpResponse<Restaurant>>;
	getAllRestaurants: () => Promise<HttpResponse<Restaurant[]>>;
}
