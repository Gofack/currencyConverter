import { Component, OnInit } from '@angular/core';
import { RateServiceService } from '../../services/rate-service.service';
import { StringNumberPair } from '../../interfaces/currency';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	rates: StringNumberPair = {};
	usdRate = '';
	eurRate = '';
	baseCurr = '';

	constructor(private rateService: RateServiceService) { }

	ngOnInit(): void {
		this.rateService.getRates().subscribe(({ base, rates }) => {
			this.baseCurr = base;
			this.rates = rates;
			const { USD, EUR } = rates;
			this.usdRate = this.calculateRate(USD);
			this.eurRate = this.calculateRate(EUR);
		})
	}

	calculateRate(rate: number): string {
		return ((1 / rate) / 1).toFixed(2);
	}
}
