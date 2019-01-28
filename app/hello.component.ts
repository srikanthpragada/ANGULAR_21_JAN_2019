import { Component } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html'
})
export class HelloComponent {
    message : string;

    wish(name : string) {
        var today = new Date()
        var hours = today.getHours() 
        var greet = "Good Evening"

        if (hours < 12)
            greet = "Good Morning"
        else 
          if( hours < 16)
            greet = "Good Afternoon"

        this.message = greet + "," +  name
    }
}
