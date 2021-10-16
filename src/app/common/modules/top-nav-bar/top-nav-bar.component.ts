import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { CurrentUserInterface } from "../../types/current-user.interface";
import { select, Store } from "@ngrx/store";
import {
	currentUserSelector,
	isLoggedInSelector,
	submittingSelector
} from "../../../auth/store/selectors/auth.selector";
import { AppStateInterface } from "../../types/app-state.interface";

@Component({
	selector: 'rw-top-nav-bar',
	templateUrl: './top-nav-bar.component.html',
	styleUrls: ['./top-nav-bar.component.scss']
})
export class TopNavBarComponent implements OnInit {

	isLoggedIn$: Observable<boolean | null>;
	currentUser$: Observable<CurrentUserInterface | null>;

	constructor(private store: Store<AppStateInterface>) {
	}

	ngOnInit(): void {
		this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
		this.currentUser$ = this.store.pipe(select(currentUserSelector));
	}

}
