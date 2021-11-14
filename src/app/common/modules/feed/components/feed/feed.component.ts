import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from "rxjs";
import { ArticleResponseInterface } from "../../../../types/article.interface";
import { select, Store } from "@ngrx/store";
import { articlesDataSelector, articlesSubmittingSelector } from "../../store/selectors/articles.selector";
import { AppStateInterface } from "../../../../types/app-state.interface";
import { articlesAction } from "../../store/actions/articles.action";
import { map } from "rxjs/operators";
import { ActivatedRoute, Router } from "@angular/router";
import { HelperUtilsClass } from "../../../../classes/helper-utils.class";
import { GlobalConstantsClass } from "../../../../classes/global-constants.class";

@Component({
	selector: 'rw-feed',
	templateUrl: './feed.component.html',
	styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

	currentPageIndex$: Observable<number>;
	pageCount$: Observable<number>;
	@Input() feedUrl: string = '';

	articles$: Observable<ArticleResponseInterface | null>;
	isSubmitting$: Observable<boolean>;

	constructor(
		private store: Store<AppStateInterface>,
		private route: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit(): void {
		this.initializeValues();
		this.fetchData();
	}

	private initializeValues(): void {
		this.isSubmitting$ = this.store.pipe(select(articlesSubmittingSelector));
		this.articles$ = this.store.pipe(select(articlesDataSelector));
		this.pageCount$ = this.articles$.pipe(map((articles) => Math.ceil((articles?.articlesCount || 0)  / GlobalConstantsClass.articlesPerPage)));
		this.currentPageIndex$ = this.route.queryParams.pipe(map((params) => params[GlobalConstantsClass.pageQueryParamsKey] - 1 || 0));
		this.route.queryParams.subscribe((params) => {
			const page = params[GlobalConstantsClass.pageQueryParamsKey];
			if (page) {
				const queryParams = HelperUtilsClass.getStringArticlesQueryParams(page);
				this.fetchData(queryParams);
			}
		})
	}

	private fetchData(queryParams: string = ''): void {
		this.store.dispatch(articlesAction({url: this.feedUrl + queryParams}));
	}


	onIndexChange(index: number) {
		const snapshotParams = this.route.snapshot.queryParams;
		const queryParams = {
			...snapshotParams,
			[GlobalConstantsClass.pageQueryParamsKey]: index + 1
		};
		if (index < 1) {
			delete queryParams[GlobalConstantsClass.pageQueryParamsKey]
		}

		this.router.navigate(['.'], { relativeTo: this.route, queryParams})
			.then(() => {
				if (index < 1) {
					this.fetchData()
				}
			});
	}
}
