import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IosStoreDataComponent } from './ios-store-data/ios-store-data.component';

const routes: Routes = [
  {path: '', component: IosStoreDataComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IosStoreRoutingModule { }
