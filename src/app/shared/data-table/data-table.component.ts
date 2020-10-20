import {
  AfterContentChecked,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit, AfterContentChecked {
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @Input() tableData: any;
  @Input() displayedColumns: [];
  @Input() pageNo: number;
  @Output() loadMoreData = new EventEmitter();
  @Output() requestSortedData = new EventEmitter();
  count = 0;

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentChecked(): void {
    this.tableData.sort = this.sort;
  }

  // tslint:disable-next-line: use-lifecycle-interface
  navigationRequest(path: string): void {
    this.loadMoreData.emit(path);
  }
}
