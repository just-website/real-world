import { Inject, Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { PersistenceService } from "../../common/services/persistence.service";
import { Observable } from "rxjs";
import { ACCESS_TOKEN_KEY } from "../auth.module";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

	constructor(
		@Inject(ACCESS_TOKEN_KEY) private accessTokenKey: string,
		private persistenceService: PersistenceService
	) {}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const currentToken = this.persistenceService.get(this.accessTokenKey);
		req = req.clone({
			setHeaders: {
				authorization: currentToken ? `Token ${currentToken}` : ''
			}
		})
		return next.handle(req);
	}
}
