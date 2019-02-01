import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HelloComponent } from './hello.component';
import { LanguagesComponent } from './languages.component';
import { BindingComponent } from './binding.component';
import { QuotesComponent } from './quotes.component';
import { TableComponent } from './table.component';
import { PipesDemoComponent } from './pipes/pipesdemo.component';
import { BracketsPipe } from './pipes/brackets.pipe';
import { UseStackComponent } from './services/usestack.component';
import { StackService } from './services/stack.service';

@NgModule({
  declarations: [
     BindingComponent, LanguagesComponent, QuotesComponent, TableComponent,
     PipesDemoComponent, BracketsPipe, UseStackComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [StackService ],
  bootstrap: [UseStackComponent]
})
export class AppModule { }
