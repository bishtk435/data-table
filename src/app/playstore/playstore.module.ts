import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PlaystoreRoutingModule } from './playstore-routing.module';
import { PlaystoreDataComponent } from './playstore-data/playstore-data.component';
import { FiltersComponent } from './filters/filters.component';



@NgModule({
  declarations: [PlaystoreDataComponent, FiltersComponent],
  imports: [
    CommonModule,
    PlaystoreRoutingModule,
    SharedModule
  ]
})
export class PlaystoreModule { }
