import { inject, InjectionToken, NgModule } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import {RegisterComponent} from './components/register/register.component';
import {RouterModule, Routes} from "@angular/router";
import {TuiFieldErrorModule, TuiInputModule} from "@taiga-ui/kit";
import {ReactiveFormsModule} from "@angular/forms";
import {TuiButtonModule} from "@taiga-ui/core";
import {StoreModule} from "@ngrx/store";
import * as authReducer from "./store/reducers/auth.reducers";
import {featureKey} from "./store/reducers/auth.reducers";
import {AuthService} from "./services/auth.service";
import {HttpClientModule} from "@angular/common/http";
import { EffectsModule } from "@ngrx/effects";
import { RegisterEffect } from "./store/effects/register.effect";
import { BackendErrorMessagesComponent } from "../common/modules/backend-error-messages/components/backend-error-messages/backend-error-messages.component";
import { BackendErrorMessagesModule } from "../common/modules/backend-error-messages/backend-error-messages.module";
import { PersistenceService } from "../common/services/persistence.service";
import { GlobalConstantsClass } from "../common/classes/global-constants.class";

export const ACCESS_TOKEN_KEY = new InjectionToken<string>('key for access token');
export const WINDOW = new InjectionToken<Window>(
	'An abstraction over global window object',
	{
		factory: () => {
			return inject(DOCUMENT).defaultView!
		}
	},
);
export const LOCAL_STORAGE = new InjectionToken<Storage>(
	'An abstraction over window.localStorage object',
	{
		factory: () => inject(WINDOW).localStorage!,
	},
);

const routes: Routes = [
	{
		path: 'register',
		component: RegisterComponent
	}
]


@NgModule({
	declarations: [
		RegisterComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		EffectsModule.forFeature([RegisterEffect]),
		StoreModule.forFeature(authReducer.featureKey, authReducer.reducer),
		ReactiveFormsModule,
		TuiFieldErrorModule,
		TuiInputModule,
		TuiButtonModule,
		HttpClientModule,
		BackendErrorMessagesModule
	],
	providers: [
		AuthService,
		PersistenceService,
		{
			provide: ACCESS_TOKEN_KEY,
			useValue: GlobalConstantsClass.accessToken
		}
	]
})
export class AuthModule {
}
