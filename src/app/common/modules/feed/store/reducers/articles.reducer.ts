import { ArticlesStateInterface } from "../types/articles-state.interface";
import { Action, createReducer, on } from "@ngrx/store";
import { articlesAction, articlesErrorAction, articlesSuccessAction } from "../actions/articles.action";
import { routerNavigatedAction } from "@ngrx/router-store";

export const featureKey = 'articles';

export const initialState: ArticlesStateInterface = {
	isSubmitting: false,
	data: null,
	errors: null
}

export const articlesReducer = createReducer(
	initialState,
	on(articlesAction, (state) => ({
		...state,
		isSubmitting: true,
	})),
	on(articlesSuccessAction, (state, action) => ({
		...state,
		isSubmitting: false,
		data: action.articles
	})),
	on(articlesErrorAction, (state, action) => ({
		...state,
		isSubmitting: false,
		data: null,
		errors: action.error
	})),
	on(routerNavigatedAction, () => ({
		...initialState,
		isSubmitting: true
	})),

);

export function reducer(state: ArticlesStateInterface, action: Action) {
	return articlesReducer(state, action);
}

