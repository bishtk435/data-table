import { NONE_TYPE } from '@angular/compiler';
import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-filter',
  templateUrl: './data-filter.component.html',
  styleUrls: ['./data-filter.component.css'],
})
export class DataFilterComponent implements OnInit {
  @Input() filterObject: any;
  @Output() getFilteredData = new EventEmitter();

  ratingRange = null;
  selectedType = null;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(formData: object): void {
    this.getFilteredData.emit(formData);
  }
}
