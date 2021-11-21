import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { BackendErrorsInterface } from "../../../common/types/backend-errors.interface";
import { select, Store } from "@ngrx/store";
import { AppStateInterface } from "../../../common/types/app-state.interface";
import { backendErrorsSelector, submittingSelector } from "../../store/selectors/auth.selector";
import { RegisterRequestInterface } from "../../types/register-request.interface";
import { loginAction } from "../../store/actions/login.action";

@Component({
	selector: 'rw-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	loginForm: FormGroup;
	isSubmitting$: Observable<boolean>;
	backendErrors$: Observable<BackendErrorsInterface | null>;

	constructor(private store: Store<AppStateInterface>) {
	}

	ngOnInit(): void {
		this.loginForm = new FormGroup({
			email: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', [Validators.required, Validators.minLength(6)]),
		});
		this.isSubmitting$ = this.store.pipe(select(submittingSelector));
		this.backendErrors$ = this.store.pipe(select(backendErrorsSelector));
	}

	onSubmit() {
		const profile: RegisterRequestInterface = {
			user: this.loginForm.value
		}
		this.store.dispatch(loginAction({profile}));
	}

}
