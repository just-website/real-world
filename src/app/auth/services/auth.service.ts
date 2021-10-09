import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RegisterRequestInterface} from "../types/register-request.interface";
import {Observable} from "rxjs";
import {AuthResponceIntarface} from "../types/auth-responce.intarface";
import {environment} from "../../../environments/environment";
import {CurrentUserInterface} from "../../common/types/current-user.interface";
import { map, tap } from "rxjs/operators";

@Injectable()
export class AuthService {
	constructor(private http: HttpClient) {
	}

	register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
		const api = environment.apiUrl + '/users';
		return this.http.post<AuthResponceIntarface>(api, data)
			.pipe(map(({user}) => user));
	}
}
