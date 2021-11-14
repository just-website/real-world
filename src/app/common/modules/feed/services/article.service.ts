import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../../environments/environment";
import { ArticleResponseInterface } from "../../../types/article.interface";
import { Observable } from "rxjs";

@Injectable()
export class ArticleService {

	constructor(private httpClient: HttpClient) {
	}

	getArticles(url: string): Observable<ArticleResponseInterface> {
		const api = `${environment.apiUrl}${url}`;
		return this.httpClient.get<ArticleResponseInterface>(api);
	}
}
