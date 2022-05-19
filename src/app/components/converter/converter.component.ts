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
	selectedFrom: string = 'USD';
	selectedTo: string = 'EUR';
	inputValue: number = 10;
	fromRate: number = 0;
	toRate: number = 0;

	constructor(private rateService: RateServiceService) { }

	ngOnInit(): void {
		this.rateService.getRates().subscribe(data => {
			this.rates = data.rates;
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
		this.fromRate = this.rates[this.convertForm.controls['toSelect'].value];
		this.toRate = this.rates[this.convertForm.controls['fromSelect'].value];
		this.convertForm.controls['fromAmount'].setValue(((this.convertForm.controls['toAmount'].value * this.toRate) / this.fromRate).toFixed(2));
	}

	calculateExchangeRate(): void {
		this.fromRate = this.rates[this.convertForm.controls['fromSelect'].value];
		this.toRate = this.rates[this.convertForm.controls['toSelect'].value];
		this.convertForm.controls['toAmount'].setValue(((this.convertForm.controls['fromAmount'].value * this.toRate) / this.fromRate).toFixed(2));
	}
}
