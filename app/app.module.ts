import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HelloComponent } from './hello.component';
import { LanguagesComponent } from './languages.component';

@NgModule({
  declarations: [
     LanguagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [LanguagesComponent]
})
export class AppModule { }
