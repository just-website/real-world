import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { BackendErrorsInterface } from "../../../../types/backend-errors.interface";
import { TuiValidationError } from '@taiga-ui/cdk';

@Component({
	selector: 'rw-backend-error-messages',
	templateUrl: './backend-error-messages.component.html',
	styleUrls: ['./backend-error-messages.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackendErrorMessagesComponent implements OnInit {

	@Input() backendErrors: BackendErrorsInterface;
	errors: TuiValidationError[];

	constructor() {
	}

	ngOnInit(): void {
		this.errors = Object.entries(this.backendErrors).map(([key, value]) => new TuiValidationError(`${key}: ${value.join(', ')}`));
	}

}
