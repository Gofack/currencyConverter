import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CurrencyResponse } from '../interfaces/currency';

@Injectable({
	providedIn: 'root'
})
export class RateServiceService {
	baseCurrency = 'UAH';

	constructor(private http: HttpClient) { }

	getRates(): Observable<CurrencyResponse> {
		return this.http.get<CurrencyResponse>(`${environment.apiUrl}?base=${this.baseCurrency}`);
	}
}
