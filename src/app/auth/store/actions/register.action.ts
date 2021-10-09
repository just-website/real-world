import {createAction, props} from "@ngrx/store";
import {ActionTypes} from "../types/action-types";
import {RegisterRequestInterface} from "../../types/register-request.interface";
import {CurrentUserInterface} from "../../../common/types/current-user.interface";
import { HttpErrorResponse } from "@angular/common/http";
import { BackendErrorsInterface } from "../../../common/types/backend-errors.interface";

export const registerAction = createAction(
	ActionTypes.REGISTER,
	props<{ profile: RegisterRequestInterface }>()
);

export const registerSuccessAction = createAction(
	ActionTypes.REGISTER_SUCCESS,
	props<{ user: CurrentUserInterface }>()
);

export const registerErrorAction = createAction(
	ActionTypes.REGISTER_ERROR,
	props<{ error: BackendErrorsInterface }>()
);
