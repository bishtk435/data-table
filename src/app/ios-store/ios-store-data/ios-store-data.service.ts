import { Injectable } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { filter } from './filters';

@Injectable({
  providedIn: 'root'
})
export class IosStoreDataService {

  tableHeader: [];
  constructor(private api: ApiService) {}

  getTableHeaders(): any {
    this.api.getPlaystoreCategory('/get-ios-genre').subscribe((resp) => {
      console.log('headers in service: ', resp);
      return resp;
    });
  }

}
