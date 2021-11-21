import { PopularTagsInterface } from "../types/popular-tags-state.interface";
import { Action, createReducer, on } from "@ngrx/store";
import { getPopularTagsAction, getPopularTagsActionError, getPopularTagsActionSuccess } from "../actions/popular-tag.action";

export const featureKey = 'popularTags'

export const initialState: PopularTagsInterface = {
	isSubmitting: false,
	data: [],
	errors: null
}

export const popularTagsReducer = createReducer(
	initialState,
	on(getPopularTagsAction, (state) => ({
		...state,
		isSubmitting: true,
		data: [],
		errors: null
	})),
	on(getPopularTagsActionSuccess, (state, action) => ({
		...state,
		isSubmitting: false,
		data: action.tagList
	})),
	on(getPopularTagsActionError, (state, action) => ({
		...state,
		isSubmitting: false,
		errors: action.error
	}))
)

export function reducer(state: PopularTagsInterface, action: Action) {
	return popularTagsReducer(state, action);
}
