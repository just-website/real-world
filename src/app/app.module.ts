import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { TuiDialogModule, TuiLoaderModule, TuiNotificationsModule, TuiRootModule } from "@taiga-ui/core";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { AuthModule } from "./auth/auth.module";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "src/environments/environment";
import {EffectsModule} from "@ngrx/effects";
import { TopNavBarModule } from "./common/modules/top-nav-bar/top-nav-bar.module";
import { GlobalFeedModule } from "./global-feed/global-feed.module";

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
		StoreModule.forRoot({
			router: routerReducer,
		}, {}),
		StoreRouterConnectingModule.forRoot(),
		StoreDevtoolsModule.instrument({
			maxAge: 25,
			logOnly: environment.production,
			autoPause: true
		}),
		AuthModule,
		TopNavBarModule,
		GlobalFeedModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}

