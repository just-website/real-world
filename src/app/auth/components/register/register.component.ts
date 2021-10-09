import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { select, Store } from "@ngrx/store";
import { registerAction } from "../../store/actions/register.action";
import { Observable } from "rxjs";
import { selectBackendErrors, selectSubmitting } from "../../store/selectors/auth.selector";
import { AppStateInterface } from "../../../common/types/app-state.interface";
import { RegisterRequestInterface } from "../../types/register-request.interface";
import { BackendErrorsInterface } from "../../../common/types/backend-errors.interface";

@Component({
	selector: 'rw-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

	registerForm: FormGroup;
	isSubmitting$: Observable<boolean>;
	backendErrors$: Observable<BackendErrorsInterface | null>;

	constructor(private store: Store<AppStateInterface>) {
	}

	ngOnInit(): void {
		this.registerForm = new FormGroup({
			username: new FormControl('', [Validators.required]),
			email: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', [Validators.required, Validators.minLength(6)]),
		});
		this.isSubmitting$ = this.store.pipe(select(selectSubmitting))
		this.backendErrors$ = this.store.pipe(select(selectBackendErrors))
	}

	onSubmit() {
		const profile: RegisterRequestInterface = {
			user: this.registerForm.value
		}
		this.store.dispatch(registerAction({profile}));
	}
}
