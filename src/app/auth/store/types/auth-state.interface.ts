import { CurrentUserInterface } from "../../../common/types/current-user.interface";
import { BackendErrorsInterface } from "../../../common/types/backend-errors.interface";

export interface AuthStateInterface {
	isSubmitting: boolean,
	currentUser: CurrentUserInterface | null,
	isLoggedIn: boolean | null,
	errors: BackendErrorsInterface | null
}
