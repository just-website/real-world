import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../../../environments/environment";
import { PopularTag, PopularTagsResponseInterface } from "../../../types/popular-tags.interface";
import { map } from "rxjs/operators";

@Injectable()
export class PopularTagsService {

	constructor(private httpClient: HttpClient) {
	}

	getPopularTags(): Observable<PopularTag[]> {
		const api = `${environment.apiUrl}/tags`;
		return this.httpClient.get<PopularTagsResponseInterface>(api)
			.pipe(map(({tags}) => tags));
	}
}
