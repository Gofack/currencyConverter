import { Component, OnInit } from '@angular/core';
import { RateServiceService } from '../../services/rate-service.service';
import { StringNumberPair } from '../../interfaces/currency';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-converter',
	templateUrl: './converter.component.html',
	styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
	rates: StringNumberPair = {};
	selectedFrom = 'USD';
	selectedTo = 'UAH';
	inputValue = 100;
	fromRate = 0;
	toRate = 0;

	constructor(private rateService: RateServiceService) { }

	ngOnInit(): void {
		this.rateService.getRates().subscribe(({ rates }) => {
			this.rates = rates;
			this.calculateExchangeRate();
		})
	}

	convertForm = new FormGroup({
		fromAmount: new FormControl(this.inputValue),
		fromSelect: new FormControl(this.selectedFrom),
		toAmount: new FormControl(),
		toSelect: new FormControl(this.selectedTo)
	});

	onToAmountChange(): void {
		this.fromRate = this.getFormValue('toSelect');
		this.toRate = this.getFormValue('fromSelect');
		this.convertForm.controls['fromAmount'].setValue(this.calcValue('toAmount', this.toRate, this.fromRate));
	}

	calculateExchangeRate(): void {
		this.fromRate = this.getFormValue('fromSelect');
		this.toRate = this.getFormValue('toSelect');
		this.convertForm.controls['toAmount'].setValue(this.calcValue('fromAmount', this.toRate, this.fromRate));
	}

	getFormValue(control: string): number {
		return this.rates[this.convertForm.controls[control].value]
	}

	calcValue(control: string, toRate: number, fromRate: number): string {
		return ((this.convertForm.controls[control].value * toRate) / fromRate).toFixed(2);
	}
}
