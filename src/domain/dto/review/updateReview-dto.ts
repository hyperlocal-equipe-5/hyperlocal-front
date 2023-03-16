export interface UpdateReviewDto {
	id: string;
	restaurant: string;
	stars?: number;
	comment?: string;
	user?: string;
}
