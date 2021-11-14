import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, tap } from "rxjs/operators";
import { articlesAction, articlesErrorAction, articlesSuccessAction } from "../actions/articles.action";
import { ArticleService } from "../../services/article.service";
import { HttpErrorResponse } from "@angular/common/http";
import { of } from "rxjs";

@Injectable()
export class ArticlesEffect {

	articles$ = createEffect(() => {
		return this.$actions.pipe(
			ofType(articlesAction),
			exhaustMap((action) => this.articleService.getArticles(action.url).pipe(
					map((articles) => articlesSuccessAction({articles})),
					catchError((error: HttpErrorResponse) => {
						return of(articlesErrorAction({ error: error.error.errors }))
					})
				)
			)
		)
	})

	constructor(
		private articleService: ArticleService,
		private $actions: Actions
	) {
	}
}
