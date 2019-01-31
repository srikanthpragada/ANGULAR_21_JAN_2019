import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HelloComponent } from './hello.component';
import { LanguagesComponent } from './languages.component';
import { BindingComponent } from './binding.component';
import { QuotesComponent } from './quotes.component';
import { TableComponent } from './table.component';
import { PipesDemoComponent } from './pipes/pipesdemo.component';

@NgModule({
  declarations: [
     BindingComponent, LanguagesComponent, QuotesComponent, TableComponent,
     PipesDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [PipesDemoComponent]
})
export class AppModule { }
