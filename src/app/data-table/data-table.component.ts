import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../core/api.service';
import { Columns } from './columns-name';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Categories } from './categories';
import { Genres } from './genres';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;

  constructor(private api: ApiService) {}

  categories = Categories;
  genres = Genres;
  displayedColumns = Columns;
  sortingList = ['Rating', 'Reviews', 'Size', 'Name', 'Installs'];
  dataSource: any;
  page = -1;
  sortingBy = null;
  selectedGenre = null;
  selectedCategory = null;
  filters = {};
  appSearch = '';

  ngOnInit(): void {
    this.api.getData('/get-data').subscribe((resp) => {
      console.log('this is response: ', resp);
      this.dataSource = new MatTableDataSource(resp);
      this.dataSource.sort = this.sort;
    });
  }

  getSortedData(): void {
    // this.api.getSortedData('/get-sorted-data', fieldName).subscribe((resp) => {
    //   console.log('this is response: ', resp);
    //   this.dataSource = new MatTableDataSource(resp);
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    // });
    this.page = this.page + 1;
    this.api
      .getData2(
        '/get-data-updated',
        { Category: this.selectedCategory },
        this.sortingBy,
        JSON.stringify(this.page)
      )
      .subscribe((resp) => {
        console.log('this is resp: ', resp);
        this.dataSource = new MatTableDataSource(resp);
        this.dataSource.sort = this.sort;
      });
  }

  loadMoreData(): void {
    this.page = this.page + 1;
    this.api
      .getData2(
        '/get-data-updated',
        this.filters,
        this.sortingBy,
        JSON.stringify(this.page)
      )
      .subscribe((resp) => {
        console.log('this is resp: ', resp);
        this.dataSource = new MatTableDataSource(resp);
      });
  }

  getFilteredResult(): void {
    if (this.selectedCategory) {
      // tslint:disable-next-line: no-string-literal
      this.filters['Category'] = this.selectedCategory;
    }
    if (this.selectedGenre) {
      // tslint:disable-next-line: no-string-literal
      this.filters['Genre'] = this.selectedGenre;
    }

    if (!this.sortingBy) {
      this.sortingBy = 'Name';
    }

    this.page = 0;
    this.api
      .getData2(
        '/get-data-updated',
        this.filters,
        this.sortingBy,
        JSON.stringify(this.page)
      )
      .subscribe((resp) => {
        console.log('this is resp: ', resp);
        this.dataSource = new MatTableDataSource(resp);
        this.dataSource.sort = this.sort;
      });
  }
}
