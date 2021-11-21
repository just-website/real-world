import { ResponseErrorsInterface } from "../../../../types/backend-errors.interface";
import { PopularTag } from "../../../../types/popular-tags.interface";

export interface PopularTagsInterface {
	data: PopularTag[],
	errors: ResponseErrorsInterface | null,
	isSubmitting: boolean
}
