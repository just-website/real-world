import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './components/feed/feed.component';
import { StoreModule } from "@ngrx/store";
import * as articlesReducer from './store/reducers/articles.reducer';
import { EffectsModule } from "@ngrx/effects";
import { ArticlesEffect } from "./store/effects/articles.effect";
import { ArticleService } from "./services/article.service";
import { TuiButtonModule, TuiLinkModule, TuiLoaderModule } from "@taiga-ui/core";
import { ArticleComponent } from './components/article/article.component';
import { TuiLetModule } from "@taiga-ui/cdk";
import { TuiAvatarModule } from "@taiga-ui/kit";
import { RouterModule } from "@angular/router";
import { PaginationModule } from "../pagination/pagination.module";


@NgModule({
	declarations: [
		FeedComponent,
  ArticleComponent
	],
	imports: [
		CommonModule,
		TuiLoaderModule,
		TuiLetModule,
		TuiAvatarModule,
		TuiButtonModule,
		RouterModule,
		TuiLinkModule,
		PaginationModule,
		StoreModule.forFeature(articlesReducer.featureKey, articlesReducer.reducer),
		EffectsModule.forFeature([ArticlesEffect]),
	],
	exports: [
		FeedComponent
	],
	providers: [
		ArticleService
	]
})
export class FeedModule {
}
