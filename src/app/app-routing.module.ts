import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'playstore',
    loadChildren: () =>
      import('./playstore/playstore.module').then((m) => m.PlaystoreModule),
  },
  {
    path: 'ios-store',
    loadChildren: () =>
      import('./ios-store/ios-store.module').then(m => m.IosStoreModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
