import { ForexRatesResponse } from './../model/ForexTradingModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class DataService {
    constructor (private http:HttpClient) {}

    getLocalData() {
      return this.http.get<ForexRatesResponse>("assets/data/currencies.json");
    }
}
