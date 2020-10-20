import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaystoreDataComponent } from './playstore-data/playstore-data.component';

const routes: Routes = [
  {path: '', component: PlaystoreDataComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaystoreRoutingModule { }
