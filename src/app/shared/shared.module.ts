import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { DataFilterComponent } from './data-filter/data-filter.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { SliderComponent } from './slider/slider.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { ColumnNamePipe } from './column-name.pipe';

@NgModule({
  declarations: [
    DataTableComponent,
    DataFilterComponent,
    InputFieldComponent,
    SliderComponent,
    ColumnNamePipe,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatSliderModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  exports: [
    DataTableComponent,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatSliderModule,
    DataFilterComponent,
    MatCheckboxModule,
    MatRadioModule
  ],
})
export class SharedModule {}
