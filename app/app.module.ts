import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HelloComponent } from './hello.component';
import { LanguagesComponent } from './languages.component';
import { BindingComponent } from './binding.component';

@NgModule({
  declarations: [
     BindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [BindingComponent]
})
export class AppModule { }
