import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TuiRootModule, TuiDialogModule, TuiNotificationsModule} from "@taiga-ui/core";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TuiActionModule} from "@taiga-ui/kit";
import {StoreModule} from '@ngrx/store';
import {AuthModule} from "./auth/auth.module";

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		TuiRootModule,
		BrowserAnimationsModule,
		TuiDialogModule,
		TuiNotificationsModule,
		StoreModule.forRoot({}, {}),

		AuthModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}

