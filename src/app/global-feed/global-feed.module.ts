import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalFeedComponent } from './components/global-feed/global-feed.component';
import { RouterModule, Routes } from "@angular/router";
import { FeedModule } from "../common/modules/feed/feed.module";
import { BannerModule } from "../common/modules/banner/banner.module";
import { PopularTagsModule } from "../common/modules/popular-tags/popular-tags.module";

const routes: Routes = [
	{
		path: '',
		component: GlobalFeedComponent
	}
]

@NgModule({
	declarations: [
		GlobalFeedComponent
	],
	imports: [
		CommonModule,
		FeedModule,
		BannerModule,
		PopularTagsModule,
		RouterModule.forChild(routes)
	]
})
export class GlobalFeedModule {
}
