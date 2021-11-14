import { Inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, tap } from "rxjs/operators";
import { AuthService } from "../../services/auth.service";
import { of, throwError } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { PersistenceService } from "../../../common/services/persistence.service";
import { ACCESS_TOKEN_KEY } from "../../auth.module";
import { getCurrentUserAction, getCurrentUserErrorAction, getCurrentUserSuccessAction } from "../actions/user.action";

@Injectable()
export class UserEffect {

	getCurrentUser$ = createEffect(() => {
		return this.$actions.pipe(
			ofType(getCurrentUserAction),
			exhaustMap((action) => {
				const currentAccessToken = this.persistenceService.get(this.accessTokenKey);
				if(!currentAccessToken) {
					return of(getCurrentUserErrorAction())
				}
				return this.authService.getCurrentUser().pipe(
					map((user) => getCurrentUserSuccessAction({ user })),
					catchError((error: HttpErrorResponse) => {
						return of(getCurrentUserErrorAction())
					})
				)}
			)
		)
	})

	constructor(
		@Inject(ACCESS_TOKEN_KEY) private accessTokenKey: string,
		private $actions: Actions,
		private authService: AuthService,
		private persistenceService: PersistenceService
	) {
	}
}
