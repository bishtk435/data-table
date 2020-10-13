import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../core/api.service';
import { Columns } from './columns-name';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Categories } from './categories';
import { Genres } from './genres';
import { Types } from './types';

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
  types = Types;
  sortingList = ['Rating', 'Reviews', 'Size', 'Name', 'Installs'];
  dataSource: any;
  page = -1;
  sortingBy = null;
  selectedGenre = null;
  selectedCategory = null;
  selectedType = null;
  filters = {};
  appSearch = '';
  noResultFound = false;

  ngOnInit(): void {
    this.api.getData('/get-data').subscribe((resp) => {
      this.dataSource = new MatTableDataSource(resp);
      console.log('this is initial data: ', this.dataSource);
      this.dataSource.sort = this.sort;
    });
  }

  getSortedData(): void {
    this.page = this.page + 1;
    this.api
      .getData2(
        '/get-data-updated',
        { Category: this.selectedCategory },
        this.sortingBy,
        JSON.stringify(this.page),
        this.appSearch
      )
      .subscribe((resp) => {
        console.log('this is resp: ', resp);
        this.dataSource = new MatTableDataSource(resp);
        this.dataSource.sort = this.sort;
      });
  }

  loadMoreData(buttonType: string): void {
    this.noResultFound = false;

    if (buttonType === 'next') {
      this.page = this.page + 1;
    } else if (buttonType === 'previous') {
      this.page = this.page - 1;
    }

    this.api
      .getData2(
        '/get-data-updated',
        this.filters,
        this.sortingBy,
        JSON.stringify(this.page),
        this.appSearch
      )
      .subscribe(
        (resp) => {
          this.dataSource = new MatTableDataSource(resp);
          this.dataSource.sort = this.sort;
        },
        (err) => {
          console.log('this is error', err.error);
          this.dataSource = [];
          this.noResultFound = true;
        }
      );
  }

  getFilteredResult(): void {
    this.filters = {};
    this.noResultFound = false;
    if (this.selectedCategory && this.selectedCategory !== 'ALL') {
      // tslint:disable-next-line: no-string-literal
      this.filters['Category'] = this.selectedCategory;
    }
    if (this.selectedGenre && this.selectedGenre !== 'ALL') {
      // tslint:disable-next-line: no-string-literal
      this.filters['Genres'] = this.selectedGenre;
    }

    if (!this.sortingBy) {
      this.sortingBy = 'Name';
    }

    if (this.selectedType && this.selectedType !== 'ALL') {
      // tslint:disable-next-line: no-string-literal
      this.filters['Type'] = this.selectedType;
    }

    this.page = 0;
    this.api
      .getData2(
        '/get-data-updated',
        this.filters,
        this.sortingBy,
        JSON.stringify(this.page),
        this.appSearch
      )
      .subscribe(
        (resp) => {
          this.dataSource = new MatTableDataSource(resp);
          console.log('this is filtered data: ', this.dataSource);
          this.dataSource.sort = this.sort;
        },
        (err) => {
          console.log('this is error', err.error);
          this.dataSource = [];
          this.noResultFound = true;
        }
      );
  }
}
