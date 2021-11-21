import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TuiSizeL, TuiSizeS } from "@taiga-ui/core";

@Component({
	selector: 'rw-tag-list',
	templateUrl: './tag-list.component.html',
	styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent {

	@Input() tagList: string[];
	@Input() size: TuiSizeS | TuiSizeL = "s";
	@Output() tagClick = new EventEmitter<string>();

	constructor() {
	}

	onTagClick(tag: string) {
		this.tagClick.emit(tag);
	}
}
