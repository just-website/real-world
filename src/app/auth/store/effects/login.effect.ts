import { Inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, tap } from "rxjs/operators";
import { AuthService } from "../../services/auth.service";
import { of } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { PersistenceService } from "../../../common/services/persistence.service";
import { Router } from "@angular/router";
import { ACCESS_TOKEN_KEY } from "../../auth.module";
import { loginAction, loginErrorAction, loginSuccessAction } from "../actions/login.action";

@Injectable()
export class LoginEffect {

	login$ = createEffect(() => {
		return this.$actions.pipe(
			ofType(loginAction),
			exhaustMap((action) => this.authService.login(action.profile).pipe(
					tap((user) => this.persistenceService.set(this.accessTokenKey, user.token)),
					map((user) => loginSuccessAction({ user })),
					catchError((error: HttpErrorResponse) => {
						return of(loginErrorAction({ error: error.error.errors }))
					})
				)
			)
		)
	})

	redirectAfterSubmit$ = createEffect(() => {
		return this.$actions.pipe(
			ofType(loginSuccessAction),
			tap(() => this.router.navigateByUrl('/'))
		)
	}, { dispatch: false })

	constructor(
		@Inject(ACCESS_TOKEN_KEY) private accessTokenKey: string,
		private $actions: Actions,
		private authService: AuthService,
		private persistenceService: PersistenceService,
		private router: Router
	) {
	}
}
