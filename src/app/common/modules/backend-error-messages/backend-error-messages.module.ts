import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendErrorMessagesComponent } from "./components/backend-error-messages/backend-error-messages.component";
import { TuiErrorModule } from "@taiga-ui/core";


@NgModule({
	declarations: [BackendErrorMessagesComponent],
	imports: [
		CommonModule,
		TuiErrorModule
	],
	exports: [BackendErrorMessagesComponent]
})
export class BackendErrorMessagesModule {
}
