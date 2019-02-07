import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms'
import { CountriesComponent } from './http/countries.component';
import { AddBookComponent } from './http/add-book.component';
import { HttpGitComponent } from './http/httpgit.component';

@NgModule({
  declarations: [
       HttpGitComponent 
  ],
  imports: [
    BrowserModule, HttpClientModule , FormsModule
  ],
  providers: [ ],
  bootstrap: [HttpGitComponent]
})
export class AppModule { }
