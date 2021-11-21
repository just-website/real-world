import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularTagsComponent } from './components/popular-tags/popular-tags.component';
import { PopularTagsService } from "./services/popular-tags.service";
import { StoreModule } from "@ngrx/store";
import * as popularTagsReducer  from "./store/reducers/popular-tags.reducer";
import { EffectsModule } from "@ngrx/effects";
import { PopularTagEffect } from "./store/effects/popular-tag.effect";
import { TagListModule } from "../tag-list/tag-list.module";
import { TuiLoaderModule } from "@taiga-ui/core";
import { TuiLetModule } from "@taiga-ui/cdk";


@NgModule({
	declarations: [
		PopularTagsComponent
	],
	imports: [
		CommonModule,
		TagListModule,
		TuiLoaderModule,
		TuiLetModule,
		StoreModule.forFeature(popularTagsReducer.featureKey, popularTagsReducer.reducer),
		EffectsModule.forFeature([PopularTagEffect])
	],
	exports: [PopularTagsComponent],
	providers: [
		PopularTagsService
	]
})
export class PopularTagsModule {
}
