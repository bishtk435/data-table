import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IosStoreRoutingModule } from './ios-store-routing.module';
import { IosStoreDataComponent } from './ios-store-data/ios-store-data.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [IosStoreDataComponent],
  imports: [
    CommonModule,
    IosStoreRoutingModule,
    SharedModule
  ]
})
export class IosStoreModule { }
