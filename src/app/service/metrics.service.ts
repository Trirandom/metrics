import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface MetricsModel {
  data: number[][];
}

@Injectable({
  providedIn: 'root'
})
export class MetricsService {

  headValues: number[];
  mockupIndex = 0;

  constructor(private http: HttpClient) {
  }

  fetch(): Observable<MetricsModel> {
    this.mockupIndex = this.mockupIndex < 3 ? this.mockupIndex + 1 : 1;
    return this.http.get<MetricsModel>(`../../assets/mockup/metrics${this.mockupIndex}.json`).pipe(map(response => {
      this.headValues = response.data[0];
      return response;
    }));
  }
}
