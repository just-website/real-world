import { Inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { registerAction, registerErrorAction, registerSuccessAction } from "../actions/register.action";
import { catchError, exhaustMap, map, tap } from "rxjs/operators";
import { AuthService } from "../../services/auth.service";
import { of } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { PersistenceService } from "../../../common/services/persistence.service";
import { Router } from "@angular/router";
import { ACCESS_TOKEN_KEY } from "../../auth.module";

@Injectable()
export class RegisterEffect {

	register$ = createEffect(() => {
		return this.$actions.pipe(
			ofType(registerAction),
			exhaustMap((action) => this.authService.register(action.profile).pipe(
					tap((user) => this.persistenceService.set(this.accessTokenKey, user.token)),
					map((user) => registerSuccessAction({user})),
					catchError((error: HttpErrorResponse) => {
						return of(registerErrorAction({ error: error.error.errors }))
					})
				)
			)
		)
	})

	redirectAfterSubmit = createEffect(() => {
		return this.$actions.pipe(
			ofType(registerSuccessAction),
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
		console.log('accessTokenKey' , accessTokenKey)
	}
}
