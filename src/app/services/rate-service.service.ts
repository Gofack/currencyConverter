import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class RateServiceService {

	constructor(private http: HttpClient) { }

	getRates(): Observable<any> {
		return this.http.get(`${environment.apiUrl}?base=UAH&symbols=UAH%2CUSD%2CEUR%2CPLN`);
	}
}
