import { type HttpResponse } from '../../../../../domain/dto/http/http-response';
import { type CreateRestaurantDto } from '../../../../../domain/dto/restaurant/createRestaurant-dto';
import { type UpdateRestaurantDto } from '../../../../../domain/dto/restaurant/updateRestaurant-dto';
import { type Restaurant } from '../../../../../domain/entities/restaurant';

export interface RestaurantRouterAdminInterface {
	createRestaurant: (
		body: CreateRestaurantDto,
	) => Promise<HttpResponse<Restaurant>>;
	deleteRestaurant: (restaurantId: string) => Promise<HttpResponse<Restaurant>>;
	updateRestaurant: (
		restaurantId: string,
		body: UpdateRestaurantDto,
	) => Promise<HttpResponse<Restaurant>>;
}
