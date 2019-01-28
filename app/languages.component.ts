import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'langs',
    templateUrl: './languages.component.html'
})
export class LanguagesComponent {
    langs : string[]  = []
    constructor() { 

    }

    addLang(lang : string) 
    {
      this.langs.push(lang)
      alert("Added a new lang!")
    }

    
}
