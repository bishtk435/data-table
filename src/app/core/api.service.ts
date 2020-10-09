import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  SERVER_ADDRESS = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getData(route: string): any{
    return this.http.get(this.SERVER_ADDRESS + route);
  }

  getSortedDate(route: string, fieldName: string): any{
    const params = new HttpParams()
      .set('sort', fieldName);
    return this.http.get(this.SERVER_ADDRESS + route, {params} );
  }
}
