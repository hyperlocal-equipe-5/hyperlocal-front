import { type HttpResponse } from '../../../../../domain/dto/http/http-response';
import { type Category } from '../../../../../domain/entities/category';

export interface CategoryRouterInterface {
	getOneCategory: (
		categoryId: string,
		restaurantId: string,
	) => Promise<HttpResponse<Category>>;
	getAllCategories: (restaurantId: string) => Promise<HttpResponse<Category[]>>;
}
