import { Component, OnInit } from '@angular/core';
import { select, Store } from "@ngrx/store";
import { AppStateInterface } from "../../../../types/app-state.interface";
import { Observable } from "rxjs";
import { getPopularTagsAction } from "../../store/actions/popular-tag.action";
import { popularTagsListSelector, popularTagsSubmittingSelector } from "../../store/selectors/popular-tags.selector";
import { PopularTag } from "../../../../types/popular-tags.interface";

@Component({
	selector: 'rw-popular-tags',
	templateUrl: './popular-tags.component.html',
	styleUrls: ['./popular-tags.component.scss']
})
export class PopularTagsComponent implements OnInit {

	tagList$: Observable<PopularTag[]>;
	isSubmitting$: Observable<boolean>;

	constructor(
		private store: Store<AppStateInterface>
	) { }

	ngOnInit(): void {
		this.fetchData();
		this.initializeValues();
	}

	private fetchData() {
		this.store.dispatch(getPopularTagsAction());
	}

	private initializeValues() {
		this.isSubmitting$ = this.store.pipe(select(popularTagsSubmittingSelector));
		this.tagList$ = this.store.pipe(select(popularTagsListSelector));
	}
}
