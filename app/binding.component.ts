import { Component } from '@angular/core';

@Component({
    selector: 'binding',
    templateUrl: './binding.component.html' ,
    styles: [``]
})
export class BindingComponent {
     message = "This is DIV"
     action = "Print"
     quote = "Think Big!"

     toggleQuote() {
         if (this.quote == "Think Big!")
             this.quote = "Never Quit!"
         else
             this.quote = "Think Big!"
     }
}
