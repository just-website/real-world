import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedToggleComponent } from './components/feed-toggle/feed-toggle.component';
import { TuiTabsModule } from "@taiga-ui/kit";
import { RouterModule } from "@angular/router";


@NgModule({
	declarations: [
		FeedToggleComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		TuiTabsModule
	],
	exports: [FeedToggleComponent]
})
export class FeedToggleModule {
}
