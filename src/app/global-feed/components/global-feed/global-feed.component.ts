import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'rw-global-feed',
	templateUrl: './global-feed.component.html',
	styleUrls: ['./global-feed.component.scss']
})
export class GlobalFeedComponent implements OnInit {
	feedUrl = '/articles';

	constructor() {
	}

	ngOnInit(): void {
	}

}
