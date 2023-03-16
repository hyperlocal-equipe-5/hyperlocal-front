import { type CreateCategoryDto } from '../../../../../domain/dto/category/createCategory-dto';
import { type UpdateCategoryDto } from '../../../../../domain/dto/category/updateCategory-dto';
import { type HttpResponse } from '../../../../../domain/dto/http/http-response';
import { type Category } from '../../../../../domain/entities/category';

export interface CategoryAdminRouterInterface {
	createCategory: (body: CreateCategoryDto) => Promise<HttpResponse<Category>>;
	deleteCategory: (
		categoryId: string,
		restaurantId: string,
	) => Promise<HttpResponse<Category>>;
	updateCategory: (
		categoryId: string,
		body: UpdateCategoryDto,
	) => Promise<HttpResponse<Category>>;
}
