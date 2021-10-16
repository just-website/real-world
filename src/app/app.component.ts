import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { getCurrentUserAction } from "./auth/store/actions/user.action";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'real-world example app with Angular and NgRx';

	constructor(private store: Store) {
	}

	ngOnInit(): void {
		this.store.dispatch(getCurrentUserAction())
	}
}
