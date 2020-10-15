import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PlaystoreRoutingModule } from './playstore-routing.module';
import { PlaystoreDataComponent } from './playstore-data/playstore-data.component';


@NgModule({
  declarations: [PlaystoreDataComponent],
  imports: [
    CommonModule,
    PlaystoreRoutingModule,
    SharedModule
  ]
})
export class PlaystoreModule { }
