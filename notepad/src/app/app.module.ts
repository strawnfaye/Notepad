import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Ng2Webstorage} from 'ngx-webstorage';

import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavigateComponent } from './navigate/navigate.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    NavigateComponent,
    ThumbnailComponent
  ],
  imports: [
    BrowserModule,
    Ng2Webstorage,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
