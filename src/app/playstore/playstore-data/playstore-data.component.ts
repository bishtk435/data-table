import { Component, OnInit } from '@angular/core';
import { PlaystoreDataService } from './playstore-data.service';
import { Columns } from './columns';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-playstore-data',
  templateUrl: './playstore-data.component.html',
  styleUrls: ['./playstore-data.component.css']
})
export class PlaystoreDataComponent implements OnInit {

  displayedColumns = Columns;

  currentDataList: any;

  constructor(private playstoreDataService: PlaystoreDataService) { }

  ngOnInit(): void {
    this.playstoreDataService.loadInitialData().subscribe( (resp) => {
      this.currentDataList = new MatTableDataSource(resp);
      console.log('this is complete data: ', this.currentDataList);
    });
  }

}
