import { Component, OnInit } from '@angular/core';
import { RateServiceService } from '../../services/rate-service.service';
import { StringNumberPair } from '../../interfaces/currency';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	rates: StringNumberPair[] = [];
	usdRate: string = '';
	eurRate: string = '';
	baseCurr: string = 'UAH';

	constructor(private rateService: RateServiceService) { }

	ngOnInit(): void {
		this.rateService.getRates().subscribe(data => {
			this.baseCurr = data.base;
			this.rates = data.rates;
			for (const k in data.rates) {
				if (k === 'USD') {
					this.usdRate = ((1 / data.rates[k]) / 1).toFixed(2);
				}
				if (k === 'EUR') {
					this.eurRate = ((1 / data.rates[k]) / 1).toFixed(2);
				}
			}
		})
	}
}
