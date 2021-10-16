import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { TuiDialogModule, TuiLoaderModule, TuiNotificationsModule, TuiRootModule } from "@taiga-ui/core";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { AuthModule } from "./auth/auth.module";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "src/environments/environment";
import {EffectsModule} from "@ngrx/effects";
import { TopNavBarModule } from "./common/modules/top-nav-bar/top-nav-bar.module";

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		TuiRootModule,
		BrowserAnimationsModule,
		TuiDialogModule,
		TuiNotificationsModule,
		EffectsModule.forRoot([]),
		StoreModule.forRoot({}, {}),
		StoreDevtoolsModule.instrument({
			maxAge: 25,
			logOnly: environment.production,
			autoPause: true
		}),
		AuthModule,
		TopNavBarModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}

