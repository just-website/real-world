import { createAction, props } from "@ngrx/store";
import { LoginActionTypes } from "../types/action-types";
import { CurrentUserInterface } from "../../../common/types/current-user.interface";
import { BackendErrorsInterface } from "../../../common/types/backend-errors.interface";
import { LoginRequestInterface } from "../../types/loginRequest.interface";

export const loginAction = createAction(
	LoginActionTypes.LOGIN,
	props<{ profile: LoginRequestInterface }>()
);

export const loginSuccessAction = createAction(
	LoginActionTypes.LOGIN_SUCCESS,
	props<{ user: CurrentUserInterface }>()
);

export const loginErrorAction = createAction(
	LoginActionTypes.LOGIN_ERROR,
	props<{ error: BackendErrorsInterface }>()
);
