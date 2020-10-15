import { Injectable } from '@angular/core';
import { ApiService } from '../../core/api.service';

@Injectable({
  providedIn: 'root'
})
export class PlaystoreDataService {

  constructor(private api: ApiService) { }

  loadInitialData(): any{
    return this.api.getData('/get-data');
  }
}
