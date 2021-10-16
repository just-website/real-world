import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavBarComponent } from "./top-nav-bar.component";
import { RouterModule } from "@angular/router";
import { TuiLinkModule, TuiLoaderModule, TuiSvgModule } from "@taiga-ui/core";
import { TuiLetModule } from "@taiga-ui/cdk";


@NgModule({
	declarations: [TopNavBarComponent],
	imports: [
		CommonModule,
		RouterModule,
		TuiSvgModule,
		TuiLinkModule,
		TuiLetModule,
		TuiLoaderModule
	],
	exports: [TopNavBarComponent]
})
export class TopNavBarModule {
}
