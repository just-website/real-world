export enum RegisterActionTypes {
	REGISTER = '[AUTH] Register',
	REGISTER_SUCCESS = '[AUTH] Register success',
	REGISTER_ERROR = '[AUTH] Register error'
}

export enum LoginActionTypes {
	LOGIN = '[AUTH] Login',
	LOGIN_SUCCESS = '[AUTH] Login success',
	LOGIN_ERROR = '[AUTH] Login error'
}

export enum UserActionTypes {
	GET_CURRENT_USER = '[USER] Get current user',
	GET_CURRENT_USER_SUCCESS = '[USER] Get current user success',
	GET_CURRENT_USER_ERROR = '[USER] Get current user error',
}
