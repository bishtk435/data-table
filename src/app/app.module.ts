import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { SharedModule } from './shared/shared.module';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    CoreModule,
    MatPaginatorModule,
    MatSortModule,
    SharedModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
