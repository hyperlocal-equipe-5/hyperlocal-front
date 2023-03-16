export interface CreateReviewDto {
	stars: number;
	comment?: string;
	user?: string;
	restaurant: string;
}
