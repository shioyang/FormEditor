import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { FormComponent } from './model/form.component';

import { FeToolbarComponent } from './fe-toolbar.component';
import { FeListComponent } from './fe-list.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    FormComponent,
    FeToolbarComponent,
    FeListComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
