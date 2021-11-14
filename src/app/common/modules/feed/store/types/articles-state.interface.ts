import { ArticleResponseInterface } from "../../../../types/article.interface";
import { BackendErrorsInterface } from "../../../../types/backend-errors.interface";

export interface ArticlesStateInterface {
	errors: BackendErrorsInterface | null,
	isSubmitting: boolean,
	data: ArticleResponseInterface | null
}
