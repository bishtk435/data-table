import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../core/api.service';
import { Columns } from './columns-name';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private api: ApiService) {}

  displayedColumns = Columns;
  dataSource: any;

  ngOnInit(): void {
    this.api.getData('/get-data').subscribe((resp) => {
      console.log('this is response: ', resp);
      this.dataSource = new MatTableDataSource(resp);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  getSortedData(fieldName): void {
    this.api.getSortedDate('/get-sorted-data', fieldName).subscribe((resp) => {
      console.log('this is response: ', resp);
      this.dataSource = new MatTableDataSource(resp);
      this.dataSource.paginator = this.paginator;
    });
  }
}
