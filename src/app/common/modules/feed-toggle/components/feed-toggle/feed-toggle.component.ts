import { Component, Input, OnInit } from '@angular/core';
import { isLoggedInSelector } from "../../../../../auth/store/selectors/auth.selector";
import { Observable } from "rxjs";
import { select, Store } from "@ngrx/store";
import { AppStateInterface } from "../../../../types/app-state.interface";
import { map } from "rxjs/operators";

@Component({
	selector: 'rw-feed-toggle',
	templateUrl: './feed-toggle.component.html',
	styleUrls: ['./feed-toggle.component.scss']
})
export class FeedToggleComponent implements OnInit {

	isLoggedIn$: Observable<boolean>;

	@Input() tagName: string;
	constructor(private store: Store<AppStateInterface>) {
	}

	ngOnInit(): void {
		this.initializeValues()
	}

	private initializeValues() {
		this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector), map(Boolean));
	}
}
