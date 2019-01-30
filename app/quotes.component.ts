import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'quotes',
    templateUrl: './quotes.component.html'
})
export class QuotesComponent  {
    quotes : string[] = ["Quote1",'Quote2',"Quote3","Quote4","Quote5"] 
    pos : number = 0 
 
    next() {
        this.pos ++;
        if (this.pos == this.quotes.length)
           this.pos = 0 
    }

    prev() {
        this.pos --;
        if (this.pos < 0)
           this.pos = this.quotes.length - 1 
    }

}
