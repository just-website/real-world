import { AuthStateInterface } from "../../types/auth-state.interface";
import { Action, createReducer, on } from "@ngrx/store";
import { registerAction, registerErrorAction, registerSuccessAction } from "../actions/register.action";

export const featureKey = 'auth';

export const initialState: AuthStateInterface = {
	isSubmitting: false,
	isLoggedIn: null,
	currentUser: null,
	errors: null
}

export const authReducer = createReducer(
	initialState,
	on(registerAction, (state) => ({
		...state,
		isSubmitting: true,
		errors: null
	})),
	on(registerSuccessAction, (state, action) => ({
		...state,
		isSubmitting: false,
		isLoggedIn: true,
		currentUser: action.user,
	})),
	on(registerErrorAction, (state, action) => ({
		...state,
		isSubmitting: false,
		errors: action.error
	}))
);

export function reducer(state: AuthStateInterface, action: Action) {
	return authReducer(state, action);
}
