import { Component, OnInit } from '@angular/core';
import { Columns } from './columns';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../core/api.service';
import { filter } from './filters';

@Component({
  selector: 'app-ios-store-data',
  templateUrl: './ios-store-data.component.html',
  styleUrls: ['./ios-store-data.component.css'],
})
export class IosStoreDataComponent implements OnInit {
  currentDataList: any;
  displayedColumns = Columns;
  pageNo = 0;
  filterObject = filter;
  filters = null;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getInitialData('/get-initial-ios-data').subscribe((resp) => {
      this.currentDataList = new MatTableDataSource(resp);
    });
  }

  getMoreData(path: string): void {
    if (path === 'next') {
      this.pageNo = this.pageNo + 1;
    } else if (path === 'previous') {
      if (this.pageNo === 0) {
        alert('First page');
        return;
      } else {
        this.pageNo = this.pageNo - 1;
      }
    }

    this.api
      .getFilteredIosData('/get-filtered-ios-data', this.filters, this.pageNo)
      .subscribe(
        (resp) => {
          console.log('this is data: ', resp);
          this.currentDataList = resp;
        },
        (err) => {
          console.log('this is error!', err);
        }
      );
  }

  loadFilteredData(filterFormData: object): any {
    console.log('in comp: ', filterFormData);
    const filters = {};
    if (filterFormData['prime_genre']) {
      filters['prime_genre'] = filterFormData['prime_genre'];
      this.filters = filters;
    }

    this.api
      .getFilteredIosData('/get-filtered-ios-data', filters, this.pageNo)
      .subscribe((resp) => {
        this.currentDataList = new MatTableDataSource(resp);
      });
  }
}
