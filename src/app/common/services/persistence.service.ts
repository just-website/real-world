import { Inject, Injectable } from "@angular/core";
import { LOCAL_STORAGE } from "../../auth/auth.module";

//TODO: add token for window.localStorage
@Injectable()
export class PersistenceService {

	constructor(@Inject(LOCAL_STORAGE) private localStorage: Storage) {
	}

	set(key: string, value: any): void {
		try {
			this.localStorage.setItem(key, value);
		} catch (error) {
			console.log('Error of set data to locale storage', error)
		}
	}

	get(key: string): any {
		try {
			this.localStorage.getItem(key);
		} catch (error) {
			console.log('Error of set data to locale storage', error)
		}
	}
}
