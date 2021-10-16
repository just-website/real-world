import { createAction, props } from "@ngrx/store";
import { UserActionTypes } from "../types/action-types";
import { CurrentUserInterface } from "../../../common/types/current-user.interface";

export const getCurrentUserAction = createAction(
	UserActionTypes.GET_CURRENT_USER
);

export const getCurrentUserSuccessAction = createAction(
	UserActionTypes.GET_CURRENT_USER_SUCCESS,
	props<{ user: CurrentUserInterface }>()
);

export const getCurrentUserErrorAction = createAction(
	UserActionTypes.GET_CURRENT_USER_ERROR,
);
