import { createAction, props } from "@ngrx/store";
import { PopularTagsActionTypes } from "../types/action-types";
import { ResponseErrorsInterface } from "../../../../types/backend-errors.interface";

export const getPopularTagsAction = createAction(PopularTagsActionTypes.GET_POPULAR_TAGS);
export const getPopularTagsActionSuccess = createAction(
	PopularTagsActionTypes.GET_POPULAR_TAGS_SUCCESS,
	props<{tagList: string[]}>()
);
export const getPopularTagsActionError = createAction(
	PopularTagsActionTypes.GET_POPULAR_TAGS_ERROR,
	props<{ error: ResponseErrorsInterface }>()
)
