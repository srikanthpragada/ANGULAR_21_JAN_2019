import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'langs',
    templateUrl: './languages.component.html'
})
export class LanguagesComponent {
    langs : string[]  = []
    message : string = ""
    constructor() { 

    }

    deleteLang(lang:string)
    {
      this.message = ""
      var pos = this.langs.indexOf(lang)
      if (pos >= 0 )
         this.langs.splice(pos,1)
      else
         this.message = "Not found!"
    }

    addLang(lang : string) 
    {
      // check whether lang is already present in langs
      this.message = ""
      var pos = this.langs.indexOf(lang)
      if (pos == -1)
         this.langs.push(lang)
      else
         this.message = "Duplicate Value!"
    }

    
}
