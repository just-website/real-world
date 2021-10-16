import { createAction, props } from "@ngrx/store";
import { RegisterActionTypes } from "../types/action-types";
import { RegisterRequestInterface } from "../../types/register-request.interface";
import { CurrentUserInterface } from "../../../common/types/current-user.interface";
import { BackendErrorsInterface } from "../../../common/types/backend-errors.interface";

export const registerAction = createAction(
	RegisterActionTypes.REGISTER,
	props<{ profile: RegisterRequestInterface }>()
);

export const registerSuccessAction = createAction(
	RegisterActionTypes.REGISTER_SUCCESS,
	props<{ user: CurrentUserInterface }>()
);

export const registerErrorAction = createAction(
	RegisterActionTypes.REGISTER_ERROR,
	props<{ error: BackendErrorsInterface }>()
);
