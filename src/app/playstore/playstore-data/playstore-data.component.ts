import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { MatTableDataSource } from '@angular/material/table';
import { filter } from './filters';
import { Columns } from './columns';

@Component({
  selector: 'app-playstore-data',
  templateUrl: './playstore-data.component.html',
  styleUrls: ['./playstore-data.component.css'],
})
export class PlaystoreDataComponent implements OnInit {
  currentDataList: any;
  filters = {};
  sortBy = null;
  pattern = '';
  pageNo = 0;
  isRecordNotFound = false;
  filterObject = filter;
  displayedColumns = Columns;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getInitialData('/get-initial-playstore-data').subscribe((resp) => {
      this.currentDataList = new MatTableDataSource(resp);
    });

    this.api
      .getPlaystoreCategory('/get-playstore-category')
      .subscribe((resp) => {
        resp.forEach((item) => {
          this.filterObject.forEach((col) => {
            if (col.column_name === item.column_name) {
              col['value'] = item['value'];
            }
          });
        });
      });
  }

  loadFilteredData(filterFormData: object): void {
    console.log('this is filter form data: ', filterFormData);
    this.isRecordNotFound = false;

    this.pageNo = 0;

    if (filterFormData['Category']) {
      this.filters['Category'] = filterFormData['Category'];
    }
    if (filterFormData['Genres']) {
      this.filters['Genres'] = filterFormData['Genres'];
    }
    if (filterFormData['Type']) {
      this.filters['Type'] = filterFormData['Type'];
    }

    this.sortBy = filterFormData['sortBy'];
    this.pattern = filterFormData['pattern'];

    this.pageNo = this.pageNo + 1;

    this.api
      .getData(
        '/get-playstore-data',
        this.filters,
        filterFormData['sortBy'],
        JSON.stringify(this.pageNo),
        filterFormData['pattern']
      )
      .subscribe((resp) => {
        this.currentDataList = new MatTableDataSource(resp);
      });
  }

  getMoreData(path: string): void {
    if (path === 'next') {
      this.pageNo = this.pageNo + 1;
    } else if (path === 'previous') {
      if (this.pageNo < 1) {
        alert('First Page!');
        return;
      } else {
        this.pageNo = this.pageNo - 1;
      }
    }

    this.api
      .getData(
        '/get-playstore-data',
        this.filters,
        this.sortBy,
        JSON.stringify(this.pageNo),
        this.pattern
      )
      .subscribe(
        (resp) => {
          this.currentDataList = new MatTableDataSource(resp);
        },
        (err) => {
          this.currentDataList = [];
          this.isRecordNotFound = true;
        }
      );
  }
}
