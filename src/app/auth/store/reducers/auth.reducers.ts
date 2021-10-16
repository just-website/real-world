import { AuthStateInterface } from "../../types/auth-state.interface";
import { Action, createReducer, on } from "@ngrx/store";
import { registerAction, registerErrorAction, registerSuccessAction } from "../actions/register.action";
import { loginAction, loginErrorAction, loginSuccessAction } from "../actions/login.action";
import { getCurrentUserAction, getCurrentUserErrorAction, getCurrentUserSuccessAction } from "../actions/user.action";

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
	})),
	on(registerSuccessAction, (state, action) => ({
		...state,
		isSubmitting: false,
		isLoggedIn: true,
		errors: null,
		currentUser: action.user,
	})),
	on(registerErrorAction, (state, action) => ({
		...state,
		isSubmitting: false,
		currentUser: null,
		isLoggedIn: false,
		errors: action.error
	})),
	on(loginAction, (state) => ({
		...state,
		isSubmitting: true,
	})),
	on(loginSuccessAction, (state, action) =>({
		...state,
		errors: null,
		isLoggedIn: true,
		isSubmitting: false,
		currentUser: action.user
	})),
	on(loginErrorAction, (state, action) => ({
		...state,
		isLoggedIn: false,
		isSubmitting: false,
		currentUser: null,
		errors: action.error
	})),
	on(getCurrentUserAction, (state) => ({
		...state,
		isSubmitting: true
	})),
	on(getCurrentUserSuccessAction, (state, action) => ({
		...state,
		isSubmitting: false,
		errors: null,
		isLoggedIn: true,
		currentUser: action.user
	})),
	on(getCurrentUserErrorAction, (state, action) => ({
		...state,
		isLoggedIn: false,
		isSubmitting: false,
		currentUser: null,
	})),
);

export function reducer(state: AuthStateInterface, action: Action) {
	return authReducer(state, action);
}
