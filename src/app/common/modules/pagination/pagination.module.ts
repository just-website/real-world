import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';
import { TuiPaginationModule } from "@taiga-ui/kit";


@NgModule({
	declarations: [
		PaginationComponent
	],
	imports: [
		CommonModule,
		TuiPaginationModule
	],
	exports: [PaginationComponent]
})
export class PaginationModule {
}
