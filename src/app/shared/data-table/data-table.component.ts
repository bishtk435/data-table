import {
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
export class DataTableComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @Input() tableData: any;
  @Input() displayedColumns: any;
  @Output() loadMoreData = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log('table data: ', this.displayedColumns);
  }

  navigationRequest(path: string): void {
    this.loadMoreData.emit(path);
  }
}
