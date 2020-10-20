import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  SERVER_ADDRESS = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getInitialData(route: string): any {
    return this.http.get(this.SERVER_ADDRESS + route);
  }

  getData(
    route: string,
    filters: object,
    sort: string,
    pageNo: string,
    namePattern: string
  ): any {
    const params = new HttpParams()
      .set('sort', JSON.stringify(sort))
      .set('filters', JSON.stringify(filters))
      .set('page', pageNo)
      .set('namePattern', namePattern);
    return this.http.get(this.SERVER_ADDRESS + route, { params });
  }

  getIosCategory(route: string): any {
    return this.http.get(this.SERVER_ADDRESS + route);
  }

  getPlaystoreCategory(route: string): any{
    return this.http.get(this.SERVER_ADDRESS + route);
  }

  getIosData(route: string, pageNo: string): any {
    const params = new HttpParams().set('page', pageNo);
    return this.http.get(this.SERVER_ADDRESS + route, { params });
  }

  getFilteredIosData(route: string, filters: object, pageNo: number): any {
    const params = new HttpParams()
      .set('filters', JSON.stringify(filters))
      .set('page', JSON.stringify(pageNo));
    return this.http.get(this.SERVER_ADDRESS + route, { params });
  }

  getSortedIosData(
    route: string,
    filter: object,
    sortBy: string,
    pageNo: number
  ): any {
    const params = new HttpParams()
      .set('filters', JSON.stringify(filter))
      .set('sortBy', sortBy)
      .set('page', JSON.stringify(pageNo));

    return this.http.get(this.SERVER_ADDRESS + route, { params });
  }
}
