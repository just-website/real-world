import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from './components/register/register.component';
import {RouterModule, Routes} from "@angular/router";
import {TuiFieldErrorModule, TuiInputModule} from "@taiga-ui/kit";
import {ReactiveFormsModule} from "@angular/forms";
import {TuiButtonModule} from "@taiga-ui/core";

const routes: Routes = [
	{
		path: 'register',
		component: RegisterComponent
	}
]

@NgModule({
	declarations: [
		RegisterComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		ReactiveFormsModule,
		TuiFieldErrorModule,
		TuiInputModule,
		TuiButtonModule
	]
})
export class AuthModule {
}
