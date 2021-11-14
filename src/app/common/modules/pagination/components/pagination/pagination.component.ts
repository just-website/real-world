import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'rw-pagination',
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

	@Input() pageCount: number = 0;
	@Input() currentPage: number = 0;
	@Output() indexChange: EventEmitter<number> = new EventEmitter();

	constructor() {
	}

	ngOnInit(): void {
	}

	onIndexChange($event: number) {
		this.indexChange.emit($event);
	}
}
