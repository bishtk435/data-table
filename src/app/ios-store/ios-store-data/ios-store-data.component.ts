import { Component, OnInit } from '@angular/core';
import { IosStoreDataService } from './ios-store-data.service';
import { Columns } from './columns';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ios-store-data',
  templateUrl: './ios-store-data.component.html',
  styleUrls: ['./ios-store-data.component.css']
})
export class IosStoreDataComponent implements OnInit {

  currentDataList: any;
  displayedColumns = Columns;

  constructor(private iosStoreDataService: IosStoreDataService) { }

  ngOnInit(): void {
    this.iosStoreDataService.loadInitialData().subscribe( (resp) => {
      this.currentDataList = new MatTableDataSource(resp);
      this.currentDataList = resp;
    });
  }

}
