import { Injectable } from '@angular/core';
import { ApiService } from '../../core/api.service';

@Injectable({
  providedIn: 'root'
})
export class IosStoreDataService {

  constructor(private api: ApiService) { }

  loadInitialData(): any{
    return this.api.getData('/get-ios-data');
  }
}
