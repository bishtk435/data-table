import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../core/api.service';
import { IosStoreDataService } from './ios-store-data.service';

import { filter } from './filters';
import { Columns } from './columns';

@Component({
  selector: 'app-ios-store-data',
  templateUrl: './ios-store-data.component.html',
  styleUrls: ['./ios-store-data.component.css'],
})
export class IosStoreDataComponent implements OnInit {
  currentDataList: any;
  pageNo = 0;
  filterObject = filter;
  filters = null;
  displayedColumns = Columns;

  constructor(
    private api: ApiService,
    private iosStoreDataService: IosStoreDataService
  ) {}

  ngOnInit(): void {
    this.api.getInitialData('/get-initial-ios-data').subscribe((resp) => {
      this.currentDataList = new MatTableDataSource(resp);
    });

    console.log(
      'headers from service: ',
      this.iosStoreDataService.getTableHeaders()
    );

    this.api.getIosCategory('/get-ios-genre').subscribe((resp) => {
      resp.forEach((item) => {
        this.filterObject.forEach((col) => {
          if (col.column_name === item.column_name) {
            col['value'] = item.value;
          }
        });
      });
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
          this.currentDataList = resp;
        },
        (err) => {
          alert(err);
        }
      );
  }

  loadFilteredData(filterFormData: object): any {
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
