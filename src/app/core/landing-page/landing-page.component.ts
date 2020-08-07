import { ForexRatesResponse } from './../model/ForexTradingModel';
import { DataService } from './../services/data-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  public data: ForexRatesResponse;
  public isDataLoaded:boolean;
  private counter:number;

  constructor(private dataService: DataService) {
    this.isDataLoaded = false;
    this.counter = 1;
   }

  ngOnInit(): void {
    this.dataService.getLocalData().subscribe(res => {
      this.isDataLoaded = true;
      this.data = res;
      this.refreshRates();
    }); 
  }
  

  refreshRates() {
    let rateRefreshInterval = setInterval(() => {
      let increment = 0.0001;
      for (let currency in this.data.rates) {
        if (this.counter % 2 === 0) {
          increment = -0.0001;
        }

        this.data.rates[currency] += increment;
      }

      this.counter +=1;
      if (this.counter >= 5) {
        clearInterval(rateRefreshInterval);
      }
    }, 60000);
  }
}