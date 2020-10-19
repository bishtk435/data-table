import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Categories } from '../categories';
import { Genres } from '../genres';
import { Types } from '../types';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Output() getFilteredData = new EventEmitter<object>();

  constructor() { }

  categories = Categories;
  genres = Genres;
  types = Types;
  sortingList = ['Rating', 'Reviews', 'Size', 'Name', 'Installs'];
  selectedCategory = null;
  selectedGenre = null;
  selectedType = null;
  appSearch = '';
  sortingBy = null;

  ngOnInit(): void {
  }

  getFilteredResult(): void {
    const filterFormData = { Category: this.selectedCategory,
                      Genres: this.selectedGenre,
                      Type: this.selectedType,
                      pattern: this.appSearch,
                      sortBy: this.sortingBy,
    };
    this.getFilteredData.emit(filterFormData);
  }
}
