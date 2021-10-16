import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RegisterRequestInterface } from "../types/register-request.interface";
import { Observable } from "rxjs";
import { AuthResponceIntarface } from "../types/auth-responce.intarface";
import { environment } from "../../../environments/environment";
import { CurrentUserInterface } from "../../common/types/current-user.interface";
import { map } from "rxjs/operators";
import { LoginRequestInterface } from "../types/loginRequest.interface";
import { ApiUrlClass } from "../../common/classes/global-constants.class";

@Injectable()
export class AuthService {
	constructor(private http: HttpClient) {
	}

	register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
		const api = `${environment.apiUrl}/${ApiUrlClass.register}`;
		return this.http.post<AuthResponceIntarface>(api, data)
			.pipe(map(({user}) => user));
	}

	login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
		const api = `${environment.apiUrl}/${ApiUrlClass.login}`;
		return this.http.post<AuthResponceIntarface>(api, data)
			.pipe(map(({user}) => user));
	}

	getCurrentUser(): Observable<CurrentUserInterface> {
		const api = `${environment.apiUrl}/${ApiUrlClass.getCurrentUser}`;
		return this.http.get<AuthResponceIntarface>(api).pipe(map(({user}) => user));
	}
}
