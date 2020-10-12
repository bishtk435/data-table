import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  SERVER_ADDRESS = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getData(route: string): any {
    return this.http.get(this.SERVER_ADDRESS + route);
  }

  getSortedData(route: string, fieldName: string): any {
    const params = new HttpParams().set('sort', fieldName);
    return this.http.get(this.SERVER_ADDRESS + route, { params });
  }

  getData2(route: string, filters: object, sort: string, pageNo: string): any {
    const params = new HttpParams()
      .set('sort', JSON.stringify(sort))
      .set('filters', JSON.stringify(filters))
      .set('page', pageNo);
    return this.http.get(this.SERVER_ADDRESS + route, { params });
  }
}
