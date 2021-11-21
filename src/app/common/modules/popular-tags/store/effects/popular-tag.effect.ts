import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { of } from "rxjs";
import {
	getPopularTagsAction,
	getPopularTagsActionError,
	getPopularTagsActionSuccess
} from "../actions/popular-tag.action";
import { PopularTagsService } from "../../services/popular-tags.service";
import { ResponseErrorsInterface } from "../../../../types/backend-errors.interface";

@Injectable()
export class PopularTagEffect {

	popularTags$ = createEffect(() => {
		return this.$actions.pipe(
			ofType(getPopularTagsAction),
			exhaustMap((action) => this.popularTagsService.getPopularTags().pipe(
					map((tagList) => getPopularTagsActionSuccess({tagList})),
					catchError((error: ResponseErrorsInterface) => {
						return of(getPopularTagsActionError({ error }))
					})
				)
			)
		)
	})

	constructor(
		private $actions: Actions,
		private popularTagsService: PopularTagsService
	) {
	}
}
