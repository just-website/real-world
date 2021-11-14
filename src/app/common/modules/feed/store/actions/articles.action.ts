import { createAction, props } from "@ngrx/store";
import { ArticlesActionTypes } from "../types/action-types";
import { ArticleResponseInterface } from "../../../../types/article.interface";
import { BackendErrorsInterface } from "../../../../types/backend-errors.interface";

export const articlesAction = createAction(
	ArticlesActionTypes.GET_ARTICLES,
	props<{url: string}>()
);
export const articlesSuccessAction = createAction(
	ArticlesActionTypes.GET_ARTICLES_SUCCESS,
	props<{articles: ArticleResponseInterface}>()
);
export const articlesErrorAction = createAction(
	ArticlesActionTypes.GET_ARTICLES_ERROR,
	props<{ error: BackendErrorsInterface }>()
);
