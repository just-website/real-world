export interface BackendErrorsInterface {
	[key: string]: string[]
}

export interface ResponseErrorsInterface {
	errors: {
		body: string[]
	}
}
