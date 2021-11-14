import { Component, Input, OnInit } from '@angular/core';
import { Article, ArticleResponseInterface } from "../../../../types/article.interface";

@Component({
	selector: 'rw-article',
	templateUrl: './article.component.html',
	styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

	@Input() article: Article;
	constructor() {
	}

	ngOnInit(): void {
	}

	onFavorited($event: MouseEvent) {

	}
}
