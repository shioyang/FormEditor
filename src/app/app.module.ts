import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { FormComponent } from './model/form.component';

import { FeToolbarComponent } from './fe-toolbar.component';
import { FeListComponent } from './fe-list.component';
import { NewFormComponent } from './new-form.component';

import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    AppComponent,
    FormComponent,
    FeToolbarComponent,
    FeListComponent,
    NewFormComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
