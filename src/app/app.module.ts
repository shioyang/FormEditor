import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { FormComponent } from './model/form.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    FormComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
