import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BprListComponent } from './bpr-list/bpr-list.component';
import { BprDetailsComponent } from './bpr-details/bpr-details.component';


@NgModule({
  declarations: [
    AppComponent,
    BprListComponent,
    BprDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
