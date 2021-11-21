import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagListComponent } from './components/tag-list/tag-list.component';
import { TuiTagModule } from "@taiga-ui/kit";


@NgModule({
	declarations: [
		TagListComponent
	],
	imports: [
		CommonModule,
		TuiTagModule
	],
	exports: [TagListComponent]
})
export class TagListModule {
}
